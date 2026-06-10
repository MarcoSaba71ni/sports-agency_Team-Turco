const coachesSection = document.getElementById("coaches-section");
const gsapInstance = window.gsap;
const scrollTriggerPlugin = window.ScrollTrigger;

if (gsapInstance && scrollTriggerPlugin && coachesSection) {
    gsapInstance.registerPlugin(scrollTriggerPlugin);
    gsapInstance.from(coachesSection, {
        scrollTrigger: {
            trigger: "#coaches-section",
            start: "top 75%",
            once: true
        },
        opacity: 0,
		y: 36,
		duration: 2.0,
		ease: "power2.out"
    });
}