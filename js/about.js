const dynamicText = document.getElementById("dynamic-text");
let words = ['COMPLEXITY', 'INDIVIDUALITY', 'EXCELLENCE'];

function updateAnimatedWords(lang) {
    if (lang === 'es') {
        words = ['COMPLEJIDAD', 'INDIVIDUALIDAD', 'EXCELENCIA'];
    } else if (lang === 'pt') {
        words = ['COMPLEXIDADE', 'INDIVIDUALIDADE', 'EXCELÊNCIA'];
    } else {
        words = ['COMPLEXITY', 'INDIVIDUALITY', 'EXCELLENCE'];
    }
}

updateAnimatedWords(localStorage.getItem('language') || 'en');

document.addEventListener('languageChanged', (e) => {
    updateAnimatedWords(e.detail.lang);
});

let index = 0;

if (dynamicText) {
  setInterval(() => {
    index++;

    if(index >= words.length) {
      index = 0;
    }

    dynamicText.textContent = "YOUR " + words[index];
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