gsap.registerPlugin(ScrollTrigger);

// Paragraphs fade in
gsap.from("#breath-texts p", {
    scrollTrigger: {
        trigger: "#breath-section",
        start: "top 75%"
    },
    opacity: 0,
    y: 25,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
});

// Image grid cards fade in with stagger
gsap.from("#breath-grid > div", {
    scrollTrigger: {
        trigger: "#breath-grid",
        start: "top 80%"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15
});

// CTA link fade in
gsap.from("#breath-section a", {
    scrollTrigger: {
        trigger: "#breath-section a",
        start: "top 90%"
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
});
