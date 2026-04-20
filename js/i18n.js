/* 1- Path Setup */
const LOCALES_PATH = new URL('./locales/', import.meta.url);
const STORAGE_KEY = 'language';

let translations = {};
let currentLanguage = localStorage.getItem(STORAGE_KEY) || 'en';

/* 2- Fetching and Loading Translations */
async function fetchLocale(lang) {
    const localeUrl = new URL(`${lang}.json`, LOCALES_PATH);
    const response = await fetch(localeUrl);

    if (!response.ok) {
        throw new Error(`Failed to load locale file: ${lang}.json`);
    }

    return response.json();
}

async function loadTranslations(lang) {
    try {
        translations = await fetchLocale(lang);
    } catch (error) {
        // Backward compatibility in case Spanish file is still named sp.json.
        if (lang === 'es') {
            translations = await fetchLocale('sp');
        } else {
            throw error;
        }
    }

    updateText();
    localStorage.setItem(STORAGE_KEY, lang);
    currentLanguage = lang;
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/* 3- Updating Text Content */

function updateText() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[key] !== undefined) {
            // Check if this element has a data-i18n-attr attribute for attribute translation
            const attrName = element.dataset.i18nAttr;
            if (attrName) {
                element.setAttribute(attrName, translations[key]);
            } else {
                element.textContent = translations[key];
            }
        }
    });
}

/* 4- Setting Up Language Switcher */
function setupLanguageButtons() {
    document.querySelectorAll('.lang-btn-option').forEach((button) => {
        button.addEventListener('click', (event) => {
            const selectedLanguage = event.currentTarget.dataset.lang;
            if (!selectedLanguage || selectedLanguage === currentLanguage) {
                return;
            }
            loadTranslations(selectedLanguage);
        });
    });
}

/* 5- Initialize on Page Load */

document.addEventListener('DOMContentLoaded', () => {
    setupLanguageButtons();
    loadTranslations(currentLanguage);
});

export { currentLanguage, updateText };