import React, { useState } from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import "./App.css";
import "./Captcha.js";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: 'url("./background-image.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <div
        className="form-container"
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          padding: "2rem",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "400px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Form Content (Login or Signup) */}
        <div style={{ flex: 1 }}>
          {isLogin ? (
            <Login rememberMe={true} forgotPasswordLink={true} />
          ) : (
            <Signup rememberMe={true} />
          )}
        </div>

        {/* Toggle Buttons (Login/Register) in Footer */}
        <div
          className="toggle-buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
        >
          <button
            className={isLogin ? "toggle-button active" : "toggle-button"}
            style={{
              flex: 1,
              margin: "0 5px",
              padding: "0.5rem",
              borderRadius: "5px",
              background: isLogin ? "#007BFF" : "#ccc",
              color: isLogin ? "#fff" : "#000",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "toggle-button active" : "toggle-button"}
            style={{
              flex: 1,
              margin: "0 5px",
              padding: "0.5rem",
              borderRadius: "5px",
              background: !isLogin ? "#007BFF" : "#ccc",
              color: !isLogin ? "#fff" : "#000",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
