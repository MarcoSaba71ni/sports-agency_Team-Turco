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

const images = [
  "images/Trainers-TeamTurco/Diogo-img1.jpeg",
  "images/Trainers-TeamTurco/Diogo-img4-Copy.jpeg",
  "images/Trainers-TeamTurco/Diogo-img6-Copy.jpeg"
];

const heroImg = document.getElementById("hero-img");
let currentIndex = 0;

setInterval(() => {
  // fade out
  heroImg.classList.remove("opacity-100");
  heroImg.classList.add("opacity-0");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImg.src = images[currentIndex];

    // fade in
    heroImg.classList.remove("opacity-0");
    heroImg.classList.add("opacity-100");
  }, 300);
}, 4000);
