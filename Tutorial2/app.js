gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    autoAlpha: 1,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top center",
        end: () => `+=${document.querySelector('.square').offsetHeight}`,
        markers: {
            startColor: "purple",
            endColor: "black",
            indent: 0,
            fontSize: "1.5rem",
        },
        toggleClass: "red",
    }
});