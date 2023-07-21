gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 800,
    //autoAlpha: 1,
    duration: 8,
    scrollTrigger: {
        trigger: ".square",
        start: "top 60%",
        end: "top 40%",
        // Accepts Strings , 4 keywords that can effect 4 diff events
        toggleActions: "restart pause resume complete",
        //              play pause resume reverse restart reset complete none
        //              onEnter onLeave onEnterBack onLeaveBack
        markers: {
            startColor: "purple",
            endColor: "black",
            indent: 0,
            fontSize: "1.5rem",
        }
    }
});