import React from "react";
import github from "../images/github2.svg";
import reddit from "../images/reddit2.svg";
import snapchat from "../images/snapchat2.svg";
import xampp from "../images/xampp.png";
import { useNavigate } from "react-router-dom";
import "./Actions.css";
const Actions = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="login-actions">
          <img src={xampp} alt="xampp" />
          <h3>XAMPP</h3>
          <p>Sign in to download</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              style={{ backgroundColor: "#F82E0D", color: "#fff" }}
              className="cta-btn"
              onClick={() => {
                navigate("/login/reddit");
              }}
            >
              <img className="cta-img" src={reddit} alt="reddit" />
              <p>Sign in with Reddit</p>
            </button>
            <button
              style={{ backgroundColor: "#FFFC00", color: "#000" }}
              className="cta-btn"
              onClick={() => {
                navigate("/login/snapchat");
              }}
            >
              <img className="cta-img" src={snapchat} alt="snapchat" />
              <p>Sign in with Snapchat</p>
            </button>
            <button
              style={{ backgroundColor: "#000000", color: "#fff", gap: 0 }}
              className="cta-btn"
              onClick={() => {
                navigate("/login/github");
              }}
            >
              <img className="" src={github} alt="github" />
              <p>Sign in with GitHub</p>
            </button>
          </div>

          <p style={{ color: "#6D6D70", textAlign: "center" }}>
            XAMPP is a free and open-source cross-platform web server for PHP
          </p>
        </div>
      </div>
    </>
  );
};

export default Actions;
