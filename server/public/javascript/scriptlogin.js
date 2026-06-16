var tl=gsap.timeline()
var tl2=gsap.timeline()
var tl3=gsap.timeline()

tl.from(".container",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
});

tl2.from(".logodiv",{
    y:110,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
});

tl3.from("form",{
    y:110,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
});