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
        <a href="tel:+919384415892">
          <img src="customer_support.jpg" alt="" />
        </a>
      </div>

      <section className="form-section">
        <h2>Send a Message</h2>

        <div className="contact-wrapper">
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.123456!2d77.7006944!3d9.1544444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKalugumalai!5e0!3m2!1sen!2sin!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btns">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
