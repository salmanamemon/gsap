gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 800,
    duration: 3,
    scrollTrigger: (".square2")
});