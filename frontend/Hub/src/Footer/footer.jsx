import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
      <footer>
  <div className="foot-col" >
    <div className="head"><h3>About</h3></div>
    <section className="paragraph">
      They can seamlessly transition from the savoury side of the kitchen to the sweet,
      lending their unique properties to a wide range of delectable dishes.
    </section>
    <div className="icon">
          <a href="https://www.facebook.com/profile.php?id=100027007660946&mibextid=ZbWKwL"><img src="Facebook2.png" alt="oops!"/></a>
          <a href="https://www.instagram.com/neyssi_dhoni1312?igsh=YWFheGs0a25yMmU2"><img src="instagram1.png" alt="oops!"/></a>
          <a href="https://wa.me/9384415892" target="_blank"><img src="whatsapp.png" alt="oops!"/></a>
          <a href="https://x.com/Ramanan82518505?t=shLAAClFDMCoiXHXh0rsjA&s=09"><img src="x_logo.png" alt="oops!"/> </a>   
    </div>
  </div>

  <div className="foot-col">
    <div className="head_fst"><h3>Our Blends</h3></div>
    <div id="menu">
      <ul>
        <li>Aathirasam</li>
        <li>Special Sesame Aathirasam</li>
        <li>Mullu Murukku</li>
        <li>Hand-woven Murukku</li>
        <li>Butter Murukku</li>
      </ul>
    </div>
  </div>

  <div className="foot-col">
    <div className="h_sec"><h3>Contact Us</h3></div>
    <div className="contact">
       <p>33A Manickavasagar Street <br/>
        Aarumuganagar, Kalugumalai-628552 <br/></p>
        <p>9384415892 <br/></p>
        <p>sathyashop@gmail.com <br/></p>
        <p> Mon-Sat: 8am - 10pm</p>
       
      </div>
      <div className="all_ic">
      <i className="fa-solid fa-location-dot"></i>
      <i className="one fa-solid fa-phone"></i>
      <i className="one fa-solid fa-envelope"></i>
      <i className="one fa-solid fa-clock"></i>
    </div>
     <div className="copyright">
      <small>© <span id="year"></span>2001 Sweet Savory — All rights reserved</small>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
