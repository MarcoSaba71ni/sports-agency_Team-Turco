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