import { gsap } from "gsap";

export default function projectAnimation() {

    const cards = document.querySelectorAll(".project-card");

    if (!cards.length) return;

    gsap.from(cards,{
        y:80,
        opacity:0,
        stagger:.15,
        duration:.9,
        ease:"power3.out"
    });

}