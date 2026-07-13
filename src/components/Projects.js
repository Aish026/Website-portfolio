import projects from "../data/projects";

export default function Projects() {

return `

<section id="projects" class="projects">

<div class="section-title">

    <span>SELECTED PROJECTS</span>

    <h2>
        Explore the Projects
    </h2>

    <p class="section-intro">

        A collection of websites crafted for different industries,
        each designed with its own identity while sharing the same
        commitment to quality, performance and usability.

    </p>

</div>

<div class="project-grid">

${projects.map(project=>`

<div
class="project-card"
role="link"
tabindex="0"
onclick="window.open('${project.link}','_blank')"
onkeydown="if(event.key==='Enter'||event.key===' '){window.open('${project.link}','_blank')}">

<div class="project-image">

<img
src="/images/${project.id}.webp"
alt="${project.title}"
loading="lazy"
decoding="async"
width="800"
height="550">

</div>

<div class="project-content">

<div class="project-top">

<span>${project.category}</span>

<div class="arrow">

↗

</div>

</div>

<h3>${project.title}</h3>

<p class="project-desc">

${
project.id==="medical"
? "Designed to build patient trust through a calm interface, clear services and seamless appointment booking."

: project.id==="salon"
? "A luxury salon experience showcasing services, stylists and effortless online bookings."

: project.id==="restaurant"
? "Built to highlight signature dishes, ambience and reservations with an elegant dining experience."

: project.id==="jewellery"
? "A refined shopping experience crafted to showcase premium collections with timeless elegance."

: project.id==="realestate"
? "Designed to present premium properties with immersive visuals and high-converting enquiry flows."

: "Created for modern educational institutes with structured information and a professional online presence."

}

</p>

<span class="project-link">

View Live Website →

</span>

</div>

</div>

`).join("")}

</div>

</section>

`;

}
