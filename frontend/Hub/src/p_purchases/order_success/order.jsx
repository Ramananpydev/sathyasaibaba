import React from "react";
import { Link } from "react-router-dom";
import './order.css'

function Order() {
  return (
    <div className="body">
      <section className="success-container">
        <div className="success-card">
          <i className="fa-solid fa-circle-check success-icon"></i>
          <h1>Your Order Has Been Placed!</h1>
          <p>
            Thank you for shopping with <span>Sweet & Savory</span> 🍪
          </p>
          <div className="buttons">
            <Link to="/" className="btn home" >
              🏠 Back to Home
            </Link>
            <Link to="/Product" className="btn shop">
              🛒 Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
