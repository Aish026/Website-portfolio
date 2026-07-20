export default function Hero() {

return `

<section class="hero" id="hero">

<div class="hero-content">

<span class="eyebrow">
BOUTIQUE WEB STUDIO
</span>

<h1>
Premium websites
that grow your business.
</h1>

<p class="hero-description">
From no online presence to a live, working website in 1-3 weeks. Designed to make small businesses look established and win more customers.
</p>

<div class="hero-stats">

<div class="hero-stat">
<strong>6</strong>
<span>Industries</span>
</div>

<div class="hero-stat">
<strong>1-3 wks</strong>
<span>Delivery</span>
</div>

<div class="hero-stat">
<strong>Fixed</strong>
<span>Pricing</span>
</div>

</div>

<div class="hero-actions">

<a href="#projects" class="btn-primary">
View Projects
</a>

<a href="#contact" class="btn-secondary">
Start a Project
</a>

</div>

</div>

<div class="hero-right">

    <div class="district-wrapper">

        <img
            src="/images/web-district-city-768.webp"
            srcset="/images/web-district-city-480.webp 480w,
                    /images/web-district-city-768.webp 768w,
                    /images/web-district-city-1100.webp 1100w,
                    /images/web-district-city.webp 1536w"
            sizes="(max-width:768px) 90vw, (max-width:1200px) 55vw, 560px"
            class="district-city"
            alt="Web District showcasing website demos"
            loading="eager"
            fetchpriority="high"
            width="1536"
            height="1024">

        <!-- Hospital -->
        <a href="https://demo-polyclinic.vercel.app/" target="_blank" rel="noopener" class="hotspot hospital" aria-label="Medical Website">

            <span class="tap-dot"></span>

            <div class="district-card">

                <span>Healthcare</span>

                <h4>Medical Square</h4>

                <p>
                    Premium Healthcare Website
                </p>

                <strong>
                    View Project →
                </strong>

            </div>

        </a>

        <!-- Salon -->
        <a href="https://ultra-premium-salon-website.vercel.app/" target="_blank" rel="noopener" class="hotspot salon" aria-label="Salon Website">

            <span class="tap-dot"></span>

            <div class="district-card">

                <span>Salon</span>

                <h4>Beauty Boulevard</h4>

                <p>
                    Luxury Salon Website
                </p>

                <strong>
                    View Project →
                </strong>

            </div>

        </a>

        <!-- Restaurant -->
        <a href="https://cafe-premium2.vercel.app/" target="_blank" rel="noopener" class="hotspot restaurant" aria-label="Restaurant Website">

            <span class="tap-dot"></span>

            <div class="district-card">

                <span>Restaurant</span>

                <h4>Restaurant Avenue</h4>

                <p>
                    Premium Restaurant Website
                </p>

                <strong>
                    View Project →
                </strong>

            </div>

        </a>

        <!-- Education -->
        <a href="https://education-institute-demo.vercel.app/" target="_blank" rel="noopener" class="hotspot education" aria-label="Education Website">

            <span class="tap-dot"></span>

            <div class="district-card">

                <span>Education</span>

                <h4>Education Campus</h4>

                <p>
                    Modern School Website
                </p>

                <strong>
                    View Project →
                </strong>

            </div>

        </a>

        <!-- Real Estate -->
        <a href="https://demo-for-realestate.vercel.app/" target="_blank" rel="noopener" class="hotspot realestate" aria-label="Real Estate Website">

            <span class="tap-dot"></span>

            <div class="district-card">

                <span>Real Estate</span>

                <h4>Real Estate Heights</h4>

                <p>
                    Premium Property Website
                </p>

                <strong>
                    View Project →
                </strong>

            </div>

        </a>

        <!-- Jewellery -->
        <a href="https://jewellery-premium2.vercel.app/" target="_blank" rel="noopener" class="hotspot jewellery" aria-label="Jewellery Website">

            <span class="tap-dot"></span>

            <div class="district-card">

                <span>Premium Jewellery</span>

                <h4>Jewellery Plaza</h4>

                <p>
                    Premium Jewellery Website
                </p>

                <strong>
                    View Project →
                </strong>

            </div>

        </a>

    </div>

    <p class="district-hint">Tap a building to view its live demo</p>

</div>

</section>

`;

}