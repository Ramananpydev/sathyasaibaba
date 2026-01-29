import React from 'react'
import './services.css'

function Services({val}) {
  
  return (
    <div >
      
        <div className="card_one">
          <img src={val.img} alt="oops!" />
          <h2>{val.heading}</h2>
          <p>{val.p}</p>
        </div>
    </div>
  )
}

export default Services
