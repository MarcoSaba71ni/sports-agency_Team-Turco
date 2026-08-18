const approachSection = document.getElementById('approach-section');
const approachDescription = document.getElementById('approach-description');
const approachRowImg = document.getElementById('approach-row-img');
const gsapInstance = window.gsap;
const scrollTriggerPlugin = window.ScrollTrigger;

if (gsapInstance && approachSection && approachDescription && approachRowImg) {
    const approachRowItems = Array.from(approachRowImg.children).filter(
        (item) => item instanceof HTMLElement
    );

    if (approachRowItems.length > 0 && scrollTriggerPlugin) {
        const timelineConfig = {
            defaults: {
                duration: 1,
                ease: 'power2.out',
            },
            scrollTrigger: {
                trigger: approachSection,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
            },
        };

        gsapInstance.registerPlugin(scrollTriggerPlugin);

        const timeline = gsapInstance.timeline(timelineConfig);

        timeline
            .fromTo(
                approachDescription,
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0 }
            )
            .fromTo(
                approachRowItems,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, stagger: 0.18 },
                '+=0.15'
            );
    }

}