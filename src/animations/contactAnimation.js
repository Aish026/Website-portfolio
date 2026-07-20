import { gsap } from "gsap";

export default function contactAnimation() {

    const left = document.querySelector(".contact-left");
    const card = document.querySelector(".contact-card");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const fromX = entry.target === left ? -80 : 80;

            gsap.from(entry.target, {
                x: fromX,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            obs.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    if (left) observer.observe(left);
    if (card) observer.observe(card);
}
