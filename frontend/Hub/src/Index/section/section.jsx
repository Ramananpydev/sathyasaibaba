import React from 'react'
import './section.css'

function Section() {
  return (
    <div>
    <section>
    <figure>
    <div className = "color" >
      <div className="wrap-all">
      <div className = "quotes">
        Sweet Savory 
      </div>
      <div className = "text">Ethically Sourced Rice
  
      </div>
      <span className = "first">
       <p> Sweet flavors are typically associated with sugars, honey, or fruits, while <br/>savory flavors are associated with salt, spices.The interplay of these con- <br/>trasting tastes can be found in  a wide range of cuisines and dishes, from <br/>appetizers to desserts. </p>
        </span>

    
    <div class = "explore">
    <a   href  = "https://maps.app.goo.gl/nDGP4pEGC9Whb8YdA" className = " btn btn-second">Visit Our Shop</a>
    <h2 className = " btn btn-first">Explore Our Blends</h2>
    </div>
    <div class = "company-logo">
    <img src   = "logo.png" alt = "oops!" />
    </div>
    </div>
    </div>
    </figure>
    </section>

    </div>
  )
}

export default Section
