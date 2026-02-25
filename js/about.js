const dropdownBtn = document.getElementById('dropdown-btn');
const mobileNav = document.getElementById('mobile-nav');

const languageBtn = document.getElementById('lang-btn');
const languageNav = document.getElementById('lang-nav');


// Toggle mobile nav
dropdownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileNav.classList.toggle("hidden");
  languageNav.classList.add("hidden");
});

// Toggle language menu
languageBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  languageNav.classList.toggle("hidden");
  mobileNav.classList.add("hidden");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (
    !mobileNav.contains(e.target) &&
    !dropdownBtn.contains(e.target)
  ) {
    mobileNav.classList.add("hidden");
  }

  if (
    !languageNav.contains(e.target) &&
    !languageBtn.contains(e.target)
  ) {
    languageNav.classList.add("hidden");
  }
});


const dynamicText = document.getElementById("dynamic-text");
const words = ['COMPLEXITY', 'INDIVIDUALITY', 'EXCELLENCE'];
let index = 0;

setInterval(() => {
    index++;

    if(index >= words.length) {
        index = 0;
    }

    dynamicText.textContent = "YOUR " + words[index];
}  , 1000);

const teamSection = document.getElementById("trainers-profiles");
const showMoreBtn = document.getElementById("show-more-btn_profile");
const showLessBtn = document.getElementById("show-less-btn_profile");

showMoreBtn.addEventListener("click", () => {
    teamSection.classList.remove("hidden");
    teamSection.scrollIntoView({ behavior: "smooth" },2000);
    showMoreBtn.classList.add("hidden");
});

showLessBtn.addEventListener("click", () => {
    teamSection.classList.add("hidden");
    teamSection.scrollIntoView({behavior:"smooth"}, 2000);
    showMoreBtn.classList.remove("hidden");
});