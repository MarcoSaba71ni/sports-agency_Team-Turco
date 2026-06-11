const processFlowContainer = document.getElementById('process-flow');
const gsapInstance = window.gsap;
const scrollTriggerPlugin = window.ScrollTrigger;

if (gsapInstance && processFlowContainer) {
    const carouselItems = Array.from(processFlowContainer.children).filter(
        (item) => item instanceof HTMLElement
    );

    if (carouselItems.length > 0) {
        const timelineConfig = {
            defaults: {
                duration: 0.55,
                ease: 'power2.out',
            },
        };

        if (scrollTriggerPlugin) {
            gsapInstance.registerPlugin(scrollTriggerPlugin);
            timelineConfig.scrollTrigger = {
                trigger: processFlowContainer,
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