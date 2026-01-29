import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Signin from '../../SignIn/signin'
import './header.css'

function Header() {
  const [open,setOpen]=useState(false)

  return (
    <div>

      <header className="bg">
        <div className="container">

          <a href="#" className="logo">
            <i
              className="fa-solid fa-cookie-bite logo-icon"
              style={{ fontSize: "40px" }}
            ></i>
            <div className="logo-text">
              Sweet <span>Savory</span>
            </div>
          </a>

          <nav>
            <ul>
              <li> <Link to='/'>Home</Link></li>
              <li><Link to='/Product'>Product</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
              <li><Link to='/About'>About Us</Link></li>
            </ul>
          </nav>

          <div className="nav">
            <h2 className="btn-second1" onClick={()=>setOpen(true)}>Sign In</h2>
            {open && <Signin onClose={()=>setOpen(false)}/>}
          

            <a
              href="https://wa.me/919384415892?text=Hello!%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noreferrer"
              className="btn btn-first"
            >
              <i
                className="fa-solid fa-cart-shopping"
                style={{ color: "rgb(225, 230, 230)" }}
              ></i>
              Order Online
            </a>
          </div>

        </div>
      </header>
    </div>
  )
}

export default Header
