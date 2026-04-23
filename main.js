const images = [
  "images/Trainers-TeamTurco/Diogo-img1.jpeg",
  "images/Trainers-TeamTurco/Diogo-img6-Copy.jpeg",
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

const imagesCommunity = [
  "images/Athletes-TeamTurco/older-people-coordination.jpeg",
  "images/Athletes-TeamTurco/core-at-the-beach.jpeg",
  "images/Athletes-TeamTurco/lads-after-training.jpeg",
  "images/Athletes-TeamTurco/kids-celebrating.jpeg",
  "images/Athletes-TeamTurco/diogo-smiling-sicilian-and-friend.jpeg",

];

const communityImg = document.getElementById("community-img");
let currentCommunityIndex = 0;

if (communityImg && imagesCommunity.length > 0) {
  communityImg.src = imagesCommunity[currentCommunityIndex];

  setInterval(() => {
    // fade out
    communityImg.classList.remove("opacity-100");
    communityImg.classList.add("opacity-0");
    setTimeout(() => {
      currentCommunityIndex = (currentCommunityIndex + 1) % imagesCommunity.length;
      communityImg.src = imagesCommunity[currentCommunityIndex];
      // fade in
      communityImg.classList.remove("opacity-0");
      communityImg.classList.add("opacity-100");
    }, 0);
  }, 3000);
}

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


// Contact dropdowns (all trainers)
const contactToggles = document.querySelectorAll('[id^="contact-toggle-"]');

contactToggles.forEach((toggle) => {
  const trainerKey = toggle.id.replace('contact-toggle-', '');
  const panel = document.getElementById(`contact-panel-${trainerKey}`);
  const arrow = document.getElementById(`contact-arrow-${trainerKey}`);

  if (!panel || !arrow) return;

  toggle.addEventListener('click', () => {
    const isOpen = !panel.classList.contains('hidden');
    panel.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
});

// Reusable mobile details dropdown for all trainers
const trainerDetailsToggles = document.querySelectorAll('.trainer-details-toggle');

function updateInfoToggleLabel(toggle, isOpen) {
  const label = toggle.querySelector('[data-i18n]');
  if (!label) return;

  label.dataset.i18n = isOpen ? 'less-info-toggle' : 'more-info-toggle';
  document.dispatchEvent(new Event('i18n:refresh'));
}

trainerDetailsToggles.forEach((toggle) => {
  const panel = toggle.nextElementSibling;
  if (!panel) return;

  // Ensure label matches the initial open/closed state on load.
  updateInfoToggleLabel(toggle, !panel.classList.contains('hidden'));

  toggle.addEventListener('click', () => {
    const arrow = toggle.querySelector('.trainer-details-arrow');
    const isOpen = !panel.classList.contains('hidden');

    panel.classList.toggle('hidden');
    if (arrow) {
      arrow.classList.toggle('rotate-180');
    }
    toggle.setAttribute('aria-expanded', String(!isOpen));
    updateInfoToggleLabel(toggle, !isOpen);
  });
 });