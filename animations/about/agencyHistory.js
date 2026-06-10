const agencyHistoryBlock1 = document.getElementById("agency-history-block-1");
const agencyHistoryBlock2 = document.getElementById("agency-history-block-2");
const gsapInstance = window.gsap;
const scrollTriggerPlugin = window.ScrollTrigger;

if (gsapInstance && scrollTriggerPlugin && agencyHistoryBlock1 && agencyHistoryBlock2) {
	gsapInstance.registerPlugin(scrollTriggerPlugin);

	gsapInstance.from(agencyHistoryBlock1, {
		scrollTrigger: {
			trigger: "#agency-history-block-1",
			start: "top 75%",
			once: true
		},
		opacity: 0,
		y: 36,
		duration: 2.0,
		ease: "power2.out"
	});

	gsapInstance.from(agencyHistoryBlock2, {
		scrollTrigger: {
			trigger: "#agency-history-block-2",
			start: "top 75%",
			once: true
		},
		opacity: 0,
		y: 36,
		duration: 2.0,
		ease: "power2.out"
	});
}