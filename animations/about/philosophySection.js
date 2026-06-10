const phylosophySection = document.getElementById("philosophy");
const gsapInstance = window.gsap;
const scrollTriggerPlugin = window.ScrollTrigger;

if (gsapInstance && scrollTriggerPlugin && phylosophySection) {
    gsapInstance.registerPlugin(scrollTriggerPlugin);
    gsapInstance.from(phylosophySection, {
        scrollTrigger: {
            trigger: "#philosophy",
            start: "top 75%",
            once: true
        },
        opacity: 0,
		y: 36,
		duration: 2.0,
		ease: "power2.out"
    });
}