import { gsap } from "gsap";

export default function processAnimation() {

    const cards = document.querySelectorAll(".process-card");

    if (!cards.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            gsap.from(entry.target, {
                y: 60,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out"
            });

            obs.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
}
