import { gsap } from "gsap";

export default function homeanimation() {

    const tl = gsap.timeline();

    tl.from(".navbar",{
        y:-80,
        opacity:0,
        duration:.8,
        ease:"power3.out"
    })

    .from(".hero-content > *",{
        x:-70,
        opacity:0,
        stagger:.12,
        duration:.8,
        ease:"power3.out"
    },"-=.3")

    .from(".district-wrapper",{
        scale:.85,
        opacity:0,
        rotate:2,
        duration:1.2,
        ease:"power3.out"
    },"-=.8");

    tl.eventCallback("onComplete", () => {
        gsap.set([".navbar", ".hero-content > *", ".district-wrapper"], { clearProps: "all" });
    });

}