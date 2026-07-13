export default function Navbar(){

return `

<header class="navbar">

<a href="#hero" class="brand">

    <img
        src="/images/logo.png"
        alt="BusinessWebsites.co"
        class="brand-logo">

</a>

<button
class="menu-toggle"
aria-label="Open navigation menu">

☰

</button>

<nav>

<a href="#hero">Home</a>

<a href="#projects">Work</a>

<a href="#studio">About</a>

<a href="#process">Process</a>

<a href="#contact" class="nav-cta">Start Project</a>

</nav>

</header>

`;

}
