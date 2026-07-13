import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function contactAnimation(){

    gsap.from(".contact-left",{

        x:-80,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".contact",
            start:"top 75%"
        }

    });

    gsap.from(".contact-card",{

        x:80,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".contact",
            start:"top 75%"
        }

    });

}