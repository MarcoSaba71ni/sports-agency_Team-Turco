import { highPerformanceAthletes } from "./list/high-performance-list.js";

const highPerformanceList = document.getElementById("high-performance-list");

highPerformanceAthletes.forEach((athlete) => {

  // Wrapper
  const athleteWrapper = document.createElement("div");
  athleteWrapper.className = "flex flex-col items-center";

  // Card
  const athleteCard = document.createElement("div");

  athleteCard.className =
    "relative w-full h-80 rounded-lg shadow-2xl overflow-hidden mb-3 transition sm:bg-blue-500/10 sm:shadow-blue-500/40 hover:shadow-blue-500/40"


  athleteCard.innerHTML = `
        <div class="relative">
            <img
                src="${athlete.image.src}"
                alt="${athlete.image.alt}"
                class="object-cover w-full h-full transition-transform duration-500 scale-100 hover:scale-110"
            >
        </div>

        <div class="absolute font-redwing shadow top-1 left-3 text-white text-sm px-2 py-1 rounded-xl">
            <img 
                src="${athlete.flag.src}" 
                alt="${athlete.flag.alt}" 
                class="w-14 h-14 rounded-lg inline-block mr-1 opacity-80"
            >
        </div>

        <div class="absolute font-redwing top-3 right-3 text-white font-bold text-2xl px-2 py-1 rounded-full bg-blue-500/20 backdrop-blur-md shadow-md shadow-blue-500/30">
            <img src="${athlete.sport.src}" alt="${athlete.sport.alt}" class="w-10 h-10">
        </div>

    `;

  // Athlete name (below card)
  const athleteName = document.createElement("div");
  athleteName.className =
    "font-redwing text-white text-xl text-center mt-2 tracking-wide";

  athleteName.textContent = athlete.name;

  // Append
  athleteWrapper.appendChild(athleteCard);
  athleteWrapper.appendChild(athleteName);

  highPerformanceList.appendChild(athleteWrapper);

});
