gsap.registerPlugin(ScrollTrigger);

// Community image fade in
gsap.from("#community-img", {
    scrollTrigger: {
        trigger: "#community-section",
        start: "top 75%"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
});

// Subtitle h3 fade in
gsap.from("#community-section h3", {
    scrollTrigger: {
        trigger: "#community-section",
        start: "top 70%"
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.2
});

// Description paragraph fade in
gsap.from("#community-section h3 + p", {
    scrollTrigger: {
        trigger: "#community-section",
        start: "top 65%"
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.4
});

// Carousel items fade in with stagger
gsap.from("#athletes-carousel > div", {
    scrollTrigger: {
        trigger: "#athletes-carousel",
        start: "top 85%"
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1
});

// CTA button fade in
gsap.from("#community-section > div:last-child a", {
    scrollTrigger: {
        trigger: "#community-section > div:last-child",
        start: "top 90%"
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
});
