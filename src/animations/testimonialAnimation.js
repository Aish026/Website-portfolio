import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function testimonialAnimation(){

    gsap.from(".testimonial-card",{

        y:60,

        opacity:0,

        stagger:.2,

        duration:.9,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".testimonials",
            start:"top 75%"
        }

    });

}