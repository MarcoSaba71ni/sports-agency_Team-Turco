const dynamicText = document.getElementById("dynamic-text");
const phrasesByLanguage = {
  en: ['YOUR COMPLEXITY', 'YOUR INDIVIDUALITY', 'YOUR EXCELLENCE'],
  es: ['TU COMPLEJIDAD', 'TU INDIVIDUALIDAD', 'TU EXCELENCIA'],
  pt: ['TUA COMPLEXIDADE', 'TUA INDIVIDUALIDADE', 'TUA EXCELENCIA']
};

let phrases = phrasesByLanguage.en;
let index = 0;

function updateAnimatedWords(lang) {
  phrases = phrasesByLanguage[lang] || phrasesByLanguage.en;
}

function renderDynamicPhrase() {
  if (!dynamicText || phrases.length === 0) return;
  dynamicText.textContent = phrases[index];
}

updateAnimatedWords(localStorage.getItem('language') || 'en');
renderDynamicPhrase();

document.addEventListener('languageChanged', (e) => {
  updateAnimatedWords(e.detail.lang);
  index = 0;
  renderDynamicPhrase();
});

if (dynamicText) {
  setInterval(() => {
    index = (index + 1) % phrases.length;
    renderDynamicPhrase();
  }, 1000);
}

const teamSection = document.getElementById("trainers-profiles");
const showMoreBtn = document.getElementById("show-more-btn_profile");
const showLessBtn = document.getElementById("show-less-btn_profile");

if (teamSection && showMoreBtn && showLessBtn) {
  showMoreBtn.addEventListener("click", () => {
    teamSection.classList.remove("hidden");
    teamSection.scrollIntoView({ behavior: "smooth" }, 2000);
    showMoreBtn.classList.add("hidden");
  });

  showLessBtn.addEventListener("click", () => {
    teamSection.classList.add("hidden");
    teamSection.scrollIntoView({ behavior: "smooth" }, 2000);
    showMoreBtn.classList.remove("hidden");
  });
}