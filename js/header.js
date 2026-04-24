const dropdownBtn = document.getElementById('dropdown-btn');
const mobileNav = document.getElementById('mobile-nav');
const langBtnOption = document.querySelectorAll('.lang-btn-option');
const dropdownAthletesBtn = document.getElementById('dropdown-athletes-btn');
const athletesSubmenu = document.getElementById('athletes-submenu');

const languageBtn = document.getElementById('lang-btn');
const languageNav = document.getElementById('lang-nav');

const languageBtnDesktop = document.getElementById('lang-btn-desktop');
const languageNavDesktop = document.getElementById('lang-nav-desktop');


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

// Toggle desktop language menu
languageBtnDesktop.addEventListener("click", (e) => {
  e.stopPropagation();
  languageNavDesktop.classList.toggle("hidden");

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
    !languageNavDesktop.contains(e.target) &&
    !languageBtn.contains(e.target) &&
    !languageBtnDesktop.contains(e.target)
  ) {
    languageNav.classList.add("hidden");
    languageNavDesktop.classList.add("hidden");
  }
});

const closeLanguageMenus = () => {
  languageNav.classList.add("hidden");
  languageNavDesktop.classList.add("hidden");
};

langBtnOption.forEach((option) => {
  option.addEventListener('click', closeLanguageMenus);
});

// Toggle athletes submenu on hover
const athletesMenu = document.getElementById('athletes-menu');
athletesMenu.addEventListener('mouseenter', () => {
  athletesSubmenu.classList.remove('hidden');
  athletesChevron.classList.add('rotate-180');
  dropdownAthletesBtn.setAttribute('aria-expanded', 'true');
});

athletesMenu.addEventListener('mouseleave', () => {
  athletesSubmenu.classList.add('hidden');
  athletesChevron.classList.remove('rotate-180');
  dropdownAthletesBtn.setAttribute('aria-expanded', 'false');
});

// Close athletes submenu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !athletesSubmenu.contains(e.target) &&
    !dropdownAthletesBtn.contains(e.target)
  ) {
    athletesSubmenu.classList.add("hidden");
    athletesChevron.classList.remove("rotate-180");
    dropdownAthletesBtn.setAttribute('aria-expanded', 'false');
  }
});