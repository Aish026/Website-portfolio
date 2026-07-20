import "./styles/main.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Studio from "./components/Studio";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import WhyUs from "./components/WhyUs";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import homeanimation from "./animations/homeanimation";
import projectAnimation from "./animations/projectAnimation";
import processAnimation from "./animations/processAnimation";
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
${Pricing()}
${WhyUs()}
${Faq()}
${Contact()}

</main>

${Footer()}
`;

function safeRun(name, fn) {
    try {
        fn();
    } catch (err) {
        console.error(`[${name}] failed:`, err);
    }
}

safeRun("homeanimation", homeanimation);
safeRun("projectAnimation", projectAnimation);
safeRun("processAnimation", processAnimation);
safeRun("faqAnimation", faqAnimation);
safeRun("contactAnimation", contactAnimation);
safeRun("navbar", navbar);
safeRun("activeNav", activeNav);
safeRun("backtotop", backtotop);