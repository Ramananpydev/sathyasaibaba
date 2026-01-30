import React from "react";
import "./contact.css";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/enquiry/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully ✅");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("Error sending message");
      }
    } catch (error) {
      alert("Server error");
    }
  };
  return (
    <div>
      <h1 className="con_head">Contact Us</h1>
      <p className="con_p">
        We’d love to hear from you! Reach out for orders, wholesale queries, or
        just to say hello.
      </p>

      <section className=" contact-info">
        <div className="info-box">
          <a href="https://maps.app.goo.gl/nDGP4pEGC9Whb8YdA">
            <i className="fa-solid fa-location-dot"></i>
          </a>
          <h3>Visit Us</h3>
          <p>
            33A Manickavasagar Street
            <br />
            Aarumuganagar, Kalugumalai-628552
          </p>
        </div>

        <div className="info-box">
          <a href="tel:9384415892">
            <i className="fa-solid fa-phone"></i>
          </a>
          <h3>Call Us</h3>
          <p>
            +91 93844 15892
            <br />
            Mon–Sat: 9am – 10pm
          </p>
        </div>

        <div className="info-box">
          <a href="mailto:ramananramanan2435@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <h3>Email Us</h3>
          <p>sathyashop@gmail.com</p>
        </div>
      </section>
      <div className="customer">
        <a href="tel:+91987857575">
          <img src="customer_support.jpg" alt="" />
        </a>
      </div>

      <section className="form-section wrap">
        <h2>Send a Message</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btns">
            Send Message
          </button>
        </form>

        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1648.9434844850439!2d77.7006944!3d9.1544444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDknMTYuMCJOIDc3wrA0MicwMi41IkU!5e1!3m2!1sen!2sin!4v1759730683626!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </figure>
      </section>
    </div>
  );
}

export default Contact;
