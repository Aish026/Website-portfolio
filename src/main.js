import "./styles/main.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Studio from "./components/Studio";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import projectAnimation from "./animations/projectAnimation";
import processAnimation from "./animations/processAnimation";
import testimonialAnimation from "./animations/testimonialAnimation";
import faqAnimation from "./animations/faqAnimation";
import contactAnimation from "./animations/contactAnimation";
import activeNav from "./activeNav";
import navbar from "./navbar";
import backtotop from "./backtotop";

document.querySelector("#app").innerHTML = `
${Navbar()}

<main>

${Hero()}
${Studio()}
${Projects()}
${Process()}
${Testimonials()}
${Faq()}
${Contact()}

</main>

${Footer()}
`;
projectAnimation();
processAnimation();
testimonialAnimation();
faqAnimation();
contactAnimation();
navbar();
activeNav();
backtotop();
