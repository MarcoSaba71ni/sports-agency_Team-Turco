// Show More / Show Less — Trainers profiles panel
const teamSection = document.getElementById("trainers-profiles");
const showMoreBtn = document.getElementById("show-more-btn_profile");
const showLessBtn = document.getElementById("show-less-btn_profile");

if (showMoreBtn && showLessBtn && teamSection) {
    showMoreBtn.addEventListener("click", () => {
        teamSection.classList.remove("hidden");
        teamSection.scrollIntoView({ behavior: "smooth" });
        showMoreBtn.classList.add("hidden");
    });

    showLessBtn.addEventListener("click", () => {
        teamSection.classList.add("hidden");
        showMoreBtn.classList.remove("hidden");
        showMoreBtn.scrollIntoView({ behavior: "smooth" });
    });
}

// Contact dropdowns (all trainers & partners)
const contactToggles = document.querySelectorAll('[id^="contact-toggle-"]');

contactToggles.forEach((toggle) => {
    const trainerKey = toggle.id.replace("contact-toggle-", "");
    const panel = document.getElementById(`contact-panel-${trainerKey}`);
    const arrow = document.getElementById(`contact-arrow-${trainerKey}`);

    if (!panel || !arrow) return;

    toggle.addEventListener("click", () => {
        const isOpen = !panel.classList.contains("hidden");
        panel.classList.toggle("hidden");
        arrow.classList.toggle("rotate-180");
        toggle.setAttribute("aria-expanded", String(!isOpen));
    });
});

// Mobile / collapsible "More Info" panels on trainer cards
function updateInfoToggleLabel(toggle, isOpen) {
    const label = toggle.querySelector("[data-i18n]");
    if (!label) return;
    label.dataset.i18n = isOpen ? "less-info-toggle" : "more-info-toggle";
    document.dispatchEvent(new Event("i18n:refresh"));
}

const trainerDetailsToggles = document.querySelectorAll(".trainer-details-toggle");

trainerDetailsToggles.forEach((toggle) => {
    const panel = toggle.nextElementSibling;
    if (!panel) return;

    updateInfoToggleLabel(toggle, !panel.classList.contains("hidden"));

    toggle.addEventListener("click", () => {
        const arrow = toggle.querySelector(".trainer-details-arrow");
        const isOpen = !panel.classList.contains("hidden");

        panel.classList.toggle("hidden");
        if (arrow) arrow.classList.toggle("rotate-180");
        toggle.setAttribute("aria-expanded", String(!isOpen));
        updateInfoToggleLabel(toggle, !isOpen);
    });
});
