import React, { useState } from "react";
import Captcha from "./Captcha.js";
import "./login.css";

const Login = () => {
  const [isCaptchaValid, setCaptchaValid] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isCaptchaValid) {
      alert("Login successful!");
    } else {
      alert("Please validate the captcha!");
    }
  };

  return (
    <div className="form-container login-form">
      <h1>LOGIN</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <Captcha onValidate={setCaptchaValid} />
        <button type="submit" className="form-button">Login</button>
      </form>
      
      <div className="forgot-password-container">
        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login; 