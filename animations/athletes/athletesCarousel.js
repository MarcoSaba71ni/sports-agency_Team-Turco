const athletesCarousel = document.getElementById('athletes-carousel');
const gsapInstance = window.gsap;
const scrollTriggerPlugin = window.ScrollTrigger;

if (gsapInstance && athletesCarousel) {
    const carouselItems = Array.from(athletesCarousel.children).filter(
        (item) => item instanceof HTMLElement
    );

    if (carouselItems.length > 0) {
        const timelineConfig = {
            defaults: {
                duration: 3.5,
                ease: 'power2.out',
            },
        };

        if (scrollTriggerPlugin) {
            gsapInstance.registerPlugin(scrollTriggerPlugin);
            timelineConfig.scrollTrigger = {
                trigger: athletesCarousel,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
            };
        }

        const timeline = gsapInstance.timeline(timelineConfig);

        timeline.fromTo(
            carouselItems,
            { opacity: 0, y: 24 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.12,
            }
        );
    }
}