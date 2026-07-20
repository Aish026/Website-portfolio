import { gsap } from "gsap";

export default function faqAnimation() {

    const items = document.querySelectorAll(".faq details");

    if (!items.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            gsap.from(entry.target, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            obs.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    items.forEach((item) => observer.observe(item));
}
