gsap.registerPlugin(ScrollTrigger);

// Join section timeline: span + h2 → p → CTA link
const joinTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#join-section",
        start: "top 75%"
    }
});

joinTl
    .from("#join-section span, #join-section h2", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2
    })
    .from("#join-section p", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.4")
    .from("#join-section a", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.3");
