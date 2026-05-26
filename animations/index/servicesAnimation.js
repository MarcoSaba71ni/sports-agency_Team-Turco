gsap.registerPlugin(ScrollTrigger);

// Subtitle paragraph fade in
gsap.from("#services-section .text-center > p", {
    scrollTrigger: {
        trigger: "#services-section",
        start: "top 75%"
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out"
});

// Service cards fade in with stagger
gsap.from("#services-grid > div", {
    scrollTrigger: {
        trigger: "#services-grid",
        start: "top 80%"
    },
    immediateRender: false,
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15
});
