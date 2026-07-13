import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function processAnimation(){

    gsap.from(".process-card",{

        y:60,

        opacity:0,

        stagger:.18,

        duration:.9,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".process",
            start:"top 75%"
        }

    });

}