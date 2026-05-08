// GSAP REGISTER

gsap.registerPlugin(ScrollTrigger);

// NAVBAR ANIMATION

gsap.from("nav",{
    y:-100,
    opacity:0,
    duration:1
});

// HERO SECTION

gsap.from(".hero-left h3",{
    x:-100,
    opacity:0,
    duration:1
});

gsap.from(".hero-left h1",{
    x:-100,
    opacity:0,
    duration:1,
    delay:0.5
});

gsap.from(".hero-left p",{
    y:50,
    opacity:0,
    duration:1,
    delay:1
});

gsap.from(".hero-buttons",{
    scale:0,
    opacity:0,
    duration:1,
    delay:1.5
});

gsap.from(".hero-right img",{
    x:100,
    opacity:0,
    duration:1,
    delay:1
});

// SKILLS

gsap.from(".skill-card",{
    scrollTrigger:".skills",
    y:100,
    opacity:0,
    duration:1,
    stagger:0.2
});

// PROJECTS

gsap.from(".project-card",{
    scrollTrigger:".projects",
    y:100,
    opacity:0,
    duration:1,
    stagger:0.3
});

});