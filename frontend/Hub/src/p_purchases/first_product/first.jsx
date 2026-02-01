import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./first.css";

const products = [
  {
    id: 9,
    product: "/adhi.JPG",
    head_name: "Adhirasam",
    p_name: "Rice flour and jaggery.",
    price: "30",
    quantity: "Quantity",
  },
  {
    id: 10,
    product: "/adhi2.webp",
    head_name: "Sesame Adhirasam",
    p_name: "Special sesame flavor.",
    price: "40",
    quantity: "Quantity",
  },
  {
    id: 11,
    product: "/kaimu.jpg",
    head_name: "Mullu Murukku",
    p_name: "Crispy ridged murukku.",
    price: "20",
    quantity: "Quantity",
  },
  {
    id: 12,
    product: "/hand.webp",
    head_name: "Hand-woven Murukku",
    p_name: "Hand twisted snack.",
    price: "20",
    quantity: "Quantity",
  },
  {
    id: 13,
    product: "/butter.jpg",
    head_name: "Butter Murukku",
    p_name: "Rich buttery taste.",
    price: "70",
    quantity: "Quantity",
  },
];

function First() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [count, setCount] = useState(1);

  if (!product) return <h2>Product not found</h2>;

  const basePrice = Number(product.price);
  const totalPrice = basePrice * count;

  // sent data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "",
  });
  console.log(formData.payment);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      product_name: product.head_name,
      quantity: count,
      total_price: totalPrice,
    };

    const response = await fetch("http://127.0.0.1:8000/order/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      navigate("/order-success");
    } else {
      alert("Order failed ❌");
    }
  };

  return (
    <div>
      <section className="order-banner">
        <h1>Order Your Favorites Online</h1>
        <p>Freshly prepared. Delivered with care.</p>
      </section>

      <div className="order">
        <div className="order-page">
          <section className="order-section">
            <div className="order-card">
              <img src={product.product} alt={product.head_name} />
              <h3>{product.head_name}</h3>
              <p>{product.p_name}</p>

              <h3>₹ {totalPrice}</h3>

              <form className="order-form">
                <label>{product.quantity}</label>

                <button
                  type="button"
                  onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>

                <input type="text" value={count} readOnly />

                <button
                  type="button"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  +
                </button>
              </form>
            </div>
          </section>
          <section className="checkout-section">
            <h2 className="ship">Shipping Details</h2>
            <form class="checkout-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Mobile Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Enter your phone number"
                pattern="\d{10}"
                maxlength="10"
                title="Please enter exactly 10 digits"
                onChange={handleChange}
                required
              />

              <label for="address">Address:</label>
              <textarea
                name="address"
                value={formData.address}
                placeholder="Enter your full address"
                onChange={handleChange}
                required
              ></textarea>

              <h3>Payment Method</h3>
              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.payment_method === "cod"}
                    onChange={handleChange}
                  />{" "}
                  Cash on Delivery
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.payment_method === "card"}
                    onChange={handleChange}
                  />{" "}
                  Credit / Debit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="gpay"
                    checked={formData.payment_method === "gpay"}
                    onChange={handleChange}
                  />{" "}
                  Google Pay
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="phonepe"
                    checked={formData.payment_method === "phonepe"}
                    onChange={handleChange}
                  />{" "}
                  PhonePe
                </label>
              </div>

              <div class="checkout-buttons">
                <button type="submit" className="btn confirm">
                  Confirm Order
                </button>
                <button type="reset" className="btn cancel">
                  Cancel Order
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default First;
