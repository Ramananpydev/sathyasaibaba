import React from 'react'
import './review.css'



function Review({test}) {
  return (
    <div>
      <article>

        <div className= "customersay" >
            <i class={test.icon}></i>
            <p>{test.review}</p>
            <img src={test.image} alt="oops!" className='avatar' />
            <h5>{test.name}</h5>

        </div>
      </article>
    </div>
  )
}

export default Review
