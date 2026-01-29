import "./signin.css";
import { useState } from "react";
import Signup from "../Signup/signup";
import google from "../assets/google.png";
import fb from "../assets/Facebook2.png";
import insta from "../assets/instagram1.png";

function Signin({ onClose }) {
  const [signup, setSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
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

    const response = await fetch("http://127.0.0.1:8000/signin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login Success");
      console.log("User:", data);
      onClose();
    } else {
      alert(data.error);
    }
  };
  return (
    <div className="signin-overlay" onClick={onClose}>
      <div className="signin-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}> ✖ </button>

        {!signup ? (
          <>
            <h2>
              <i className="fa-solid fa-user"></i> Sign In
            </h2>

            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="username" name="username" placeholder="Enter your email" value={formData.username} onChange={handleChange} required />

              <label>Password</label>
              <input type="password"  name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />

              <button type="submit" className="signin-btn"> Sign In </button>
            </form>

            <p onClick={() => setSignup(true)}>
              Don’t have an account? Register Now
            </p>

            <section className="another">
              <a href="https://www.facebook.com/login/" target="_blank">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="https://accounts.google.com/signin" target="_blank">
                <img src={google} alt="Google" />
              </a>
              <a href="https://www.instagram.com/accounts/login/" target="_blank">
                <img src={insta} alt="Instagram" />
              </a>
            </section>
          </>
        ) : (<Signup onClose={() => setSignup(false)} goToSignin={() => setSignup(false)} />
        )}
      </div>
    </div>
  );
}

export default Signin;
