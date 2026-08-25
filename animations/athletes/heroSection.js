const heroSection = document.getElementById("hero-section");
const heroLogo = document.getElementById("hero-logo");
const heroText = document.getElementById("hero-text");
const heroSubtext = document.getElementById("hero-subtext");
const heroChevron = document.getElementById("hero-chevron");
const gsapInstance = window.gsap;

if (gsapInstance && heroSection && heroLogo && heroText && heroSubtext && heroChevron) {
    gsapInstance.set([heroLogo, heroText, heroSubtext, heroChevron], { opacity: 0 });
    gsapInstance.set(heroText, { y: 20 });
    gsapInstance.set(heroSubtext, { y: 22 });

    const heroTimeline = gsapInstance.timeline({ defaults: { ease: "power2.out" } });

    heroTimeline
        .fromTo(heroLogo, { opacity: 0, y: 24, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 2 }, "intro")
        .fromTo(heroText, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.0 }, "intro+=0.05")
        .to(heroSubtext, { opacity: 1, y: 0, duration: 0.75 }, "+=0.12")
        .fromTo(heroChevron, { opacity: 0, y: 10 }, { opacity: 0.8, y: 0, duration: 0.75 }, "+=0.12");
}