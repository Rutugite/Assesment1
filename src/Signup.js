import React, { useState } from "react";
import Captcha from "./Captcha.js";
import "./signup.css";

const Signup = () => {
  const [isCaptchaValid, setCaptchaValid] = useState(false);
  const [passwordError, setPasswordError] = useState(""); // State for password errors
  const [mobileError, setMobileError] = useState(""); // State for mobile number errors

  // Function to check password requirements
  const checkPasswordRequirements = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[@$!%*?&]/.test(password)) {
      return "Password must contain at least one special character.";
    }
    return "";
  };

  // Function to validate mobile number
  const validateMobileNumber = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/; // Ensures it's exactly 10 digits
    return mobileRegex.test(mobile);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const mobile = formData.get("mobile");

    // Check for password requirements
    const passwordValidationError = checkPasswordRequirements(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }

    // Validate mobile number
    if (!validateMobileNumber(mobile)) {
      setMobileError("Mobile number must be exactly 10 digits and contain only numbers.");
      return;
    } else {
      setMobileError(""); // Clear mobile number error if valid
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    if (!isCaptchaValid) {
      alert("Please validate the captcha!");
      return;
    }

    // If all validations pass
    alert("Registration successful!");
    setPasswordError(""); // Clear errors on success
  };

  return (
    <div className="form-container signup-form">
      <h1>REGISTER</h1>
      <h6>Please Enter Your Details</h6>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="First Name" name="firstName" required />
        <input type="text" placeholder="Last Name" name="lastName" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="text"
          placeholder="Mobile Number"
          name="mobile"
          required
          maxLength="10"
          onInput={(e) => {
            // Allow only numeric values and restrict length to 10
            e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
          }}
        />
        {mobileError && (
          <p style={{ color: "red", fontSize: "0.9rem", marginBottom: "10px" }}>
            {mobileError}
          </p>
        )}
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={() => setPasswordError("")} // Clear password errors while typing
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          required
          onChange={() => setPasswordError("")} // Clear confirm password errors while typing
        />
        {passwordError && (
          <p style={{ color: "red", fontSize: "0.9rem", marginBottom: "10px" }}>
            {passwordError}
          </p>
        )}
        <Captcha onValidate={setCaptchaValid} />
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
