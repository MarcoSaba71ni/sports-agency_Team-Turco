
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

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("athletes-carousel");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");

  const scrollAmount = 300;

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });
});


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