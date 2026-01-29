import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <section class="hero wrap">
        <div class="hero-media">
          <img src="adhi.JPG" alt="Adhirasam" />
        </div>

        <div class="hero-content">
          <h1>About Our Cottage Murukku & Athirasam Industry</h1>
          <p class="lead">
            We are a small cottage industry specializing in traditional South
            Indian snacks — handcrafted Murukku, authentic Athirasam and
            seasonal sweets made with love and time-tested recipes.
          </p>
          <p>
            Our mission is to keep traditional flavours alive using quality
            ingredients, small-batch production, and a focus on freshness. We
            supply both retail customers and wholesale partners across the
            region.
          </p>
          <Link to='/Product'>View Products</Link>
        </div>
      </section>

      <section class="wrap two-col story">
        <div>
          <h2>Our Story</h2>
          <p>Honed through learning a trade in Chennai, our journey has been built on hard work and dedication. 
            After mastering the trade and returning to our hometown, <br/>we together with our family, established 
            a small cottage industry—always deeply rooted in family values.
            For 35 years, we have proudly carried forward this tradition, ensuring that every step reflects both heritage and quality

          </p>
        </div>

        <div>
          <h2>Our Mission</h2>
          <ul class="mission-list">
            <li>Preserve traditional recipes & artisanal techniques.</li>
            <li>Use quality ingredients sourced locally where possible.</li>
            <li>
              Deliver consistent taste for retail and wholesale customers.
            </li>
          </ul>
        </div>
      </section>


      <section class="wrap gallery">
        <h2>Handmade Favorites</h2>
        <div class="images">
          <figure>
            <img src="adhi2.webp" alt="Athirasam" />
            <figcaption>Athirasam</figcaption>
          </figure>
          <figure>
            <img src="kaimu.jpg" alt="Murukku" />
            <figcaption>Hand-woven Murukku</figcaption>
          </figure>
          <figure>
            <img src="butter.jpg" alt="Butter Murukku" />
            <figcaption>Butter Murukku</figcaption>
          </figure>
        </div>
      </section>

      <section class="values-contact">
        <div class="values">
          <h3>What We Value</h3>
          <p>Craftsmanship • Clean Ingredients • Community • Tradition</p>
        </div>

        <aside class="quick-contact">
          <h3>Get in Touch</h3>
          <p>
            33A Manickavasagar Street<br />Aarumuganagar, Kalugumalai-628552
          </p>
          <p>Phone: +58585 92922<br />Email: sathyashop@gmail.com</p>
          <a class="btn-outline" href="contact.html">Contact Us</a>
        </aside>
      </section>

    </div>
  )
}

export default About
