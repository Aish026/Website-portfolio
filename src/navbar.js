export default function navbar() {

    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}