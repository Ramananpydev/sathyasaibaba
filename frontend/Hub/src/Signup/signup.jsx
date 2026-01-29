import { useEffect, useState } from "react";
import "./signup.css";



function Signup({ onClose,goToSignin }) {
 const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://127.0.0.1:8000/signup/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (response.ok) {
    alert("Signup Success");
    setFormData({ username: "", email: "", password: "" });
    goToSignin();
  } else {
    if (data.username) {
      alert("Username already exists. Please sign in.");
      goToSignin();
    } else if (data.email) {
      alert("Email already exists.");
    } else {
      alert("Signup failed");
    }
  }
};


  return (
    <div className="signin-overlay" onClick={onClose}>

      <div className="signin-card" onClick={(e)=>e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2><i className="fa-solid fa-user"></i> Sign Up</h2>
      <form method="post" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" name="username"  onChange={handleChange}required/>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" name="email" onChange={handleChange} required/>

        <label>Password</label>
        <input type="password" placeholder="Enter your password" name="password"  onChange={handleChange} required/>

        <p style={{ cursor: "pointer" }} onClick={goToSignin}>
          Already have an account? Sign In
        </p>

        <button className="signin-btn">Sign Up</button>
        <section className="another">
        <a href="https://www.facebook.com/login/" target="_blank"><img src="Facebook2.png" alt="Facebook"/></a>
        <a href="https://accounts.google.com/signin" target="_blank"><img src="google.png" alt="google"/></a>
        <a href="https://www.instagram.com/accounts/login/" target="_blank" ><img src="Instagram.png" alt="Instagram"/></a>
      </section>
    </form>
      </div>

    </div>
  )
}

export default Signup
