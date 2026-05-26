// Hero section entrance animation
// Waits for i18n to set text before animating (i18n fires "languageChanged" after fetch)
document.addEventListener("languageChanged", () => {
    const heroTl = gsap.timeline();

    heroTl
        .from("#hero-section .z-20 h1", {
            opacity: 0,
            y: 25,
            duration: 1,
            ease: "power2.out"
        })
        .from("#hero-section .z-20 a", {
            opacity: 0,
            y: 15,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.3");
}, { once: true });
