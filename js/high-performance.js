import { highPerformanceAthletes } from "./list/high-performance-list.js";

const highPerformanceList = document.getElementById("high-performance-list");

highPerformanceAthletes.forEach((athlete) => {

  // Wrapper
  const athleteWrapper = document.createElement("article");
  athleteWrapper.className = "group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/10";

  // Image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "relative overflow-hidden";

  const athleteImage = document.createElement("img");
  athleteImage.src = athlete.image.src;
  athleteImage.alt = athlete.image.alt;
  athleteImage.className = "w-full h-80 object-cover transition duration-500 group-hover:scale-105";

  const overlay = document.createElement("div");
  overlay.className = "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent";

  imageContainer.appendChild(athleteImage);
  imageContainer.appendChild(overlay);

  // Content container
  const contentContainer = document.createElement("div");
  contentContainer.className = "p-6 text-white";

  const athleteName = document.createElement("p");
  athleteName.className = "text-xl font-semibold";
  athleteName.textContent = athlete.name;

  const athleteSport = document.createElement("p");
  athleteSport.className = "mt-2 text-sm uppercase tracking-[0.25em] text-blue-400";
  athleteSport.textContent = athlete.sport.alt;  athleteSport.setAttribute("data-i18n", `athlete.sport.${athlete.sport.toLowerCase()}`);
  contentContainer.appendChild(athleteName);
  contentContainer.appendChild(athleteSport);

  athleteWrapper.appendChild(imageContainer);
  athleteWrapper.appendChild(contentContainer);

  highPerformanceList.appendChild(athleteWrapper);

});
