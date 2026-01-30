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

