const highPerformanceSection = document.getElementById('high-performance-section');
const gsapInstance = window.gsap;
const scrollTriggerPlugin = window.ScrollTrigger;
const exploreBtn = document.getElementById('explore-btn');

if (gsapInstance && scrollTriggerPlugin && highPerformanceSection && exploreBtn) {
    gsapInstance.registerPlugin(scrollTriggerPlugin);

    ScrollTrigger.create({
        trigger: highPerformanceSection,
        start: 'top 80%',
        once: true,

        onEnter: () => {
            // Initial attention-grabbing animation
            gsapInstance.to(exploreBtn, {
                backgroundColor: '#2563eb',
                color: '#ffffff',
                scale: 1.1,
                duration: 2,
                ease: 'elastic.out(1.8, 0.25)',
                boxShadow: '0 0 40px rgba(37, 99, 235, 0.8)',
            });

            // Continuous floating animation
            gsapInstance.to(exploreBtn, {
                y: -8,
                duration: 1.2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });

            // Continuous glow pulse
            gsapInstance.to(exploreBtn, {
                boxShadow: '0 0 50px rgba(37, 99, 235, 1)',
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });
        }
    });
}