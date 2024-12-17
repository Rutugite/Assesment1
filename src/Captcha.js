import React, { useState, useEffect } from "react";

const Captcha = ({ onValidate }) => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(randomCaptcha);
  };

  const handleValidation = () => {
    if (userInput === captcha) {
      onValidate(true);
    } else {
      onValidate(false);
      alert("Invalid Captcha! Please try again.");
    }
  };

  return (
    <div className="captcha-container">
      <div className="captcha-display">{captcha}</div>
      <input
        type="text"
        placeholder="Enter Captcha"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="button" onClick={handleValidation}>
        Validate
      </button>
    </div>
  );
};

export default Captcha;
