const exploreBtn = document.getElementById('explore-btn');

exploreBtn.addEventListener('click', () => {
    console.log('Explore button clicked');
    window.location.href = 'high-performance.html';
});


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