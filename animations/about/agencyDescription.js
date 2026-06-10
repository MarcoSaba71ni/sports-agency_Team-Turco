const gsapInstance = window.gsap;
const scrollTriggerPlugin = window.ScrollTrigger;
const agencyDescriptionSection = document.querySelector("#agency-description .relative.max-w-6xl");

if (gsapInstance && scrollTriggerPlugin && agencyDescriptionSection) {
	gsapInstance.registerPlugin(scrollTriggerPlugin);

	gsapInstance.from(agencyDescriptionSection, {
		scrollTrigger: {
			trigger: "#agency-description",
			start: "top 75%",
			once: true
		},
		opacity: 0,
		y: 36,
		duration: 2.0,
		ease: "power2.out"
	});
}
