gsap.registerPlugin(ScrollTrigger);

// Overlay texts (h2 + p) fade in for both sides
gsap.from("#trainers-section .absolute h2, #trainers-section .absolute p", {
    scrollTrigger: {
        trigger: "#trainers-section",
        start: "top 75%"
    },
    opacity: 0,
    y: 25,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
});

// Buttons fade in after texts
gsap.from("#trainers-section .absolute button", {
    scrollTrigger: {
        trigger: "#trainers-section",
        start: "top 80%"
    },
    immediateRender: false,
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.2
});
