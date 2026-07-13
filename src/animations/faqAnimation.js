import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function faqAnimation(){

    gsap.from(".faq details",{

        y:40,

        opacity:0,

        stagger:.12,

        duration:.8,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".faq",
            start:"top 75%"
        }

    });

}