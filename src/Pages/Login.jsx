import React, { useState } from "react";
import "../style.scss";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/")
        // ...
      })
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="FormContainer">
      <div className="FormWrap">
        <div className="logo">Chat box</div>
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
        <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
        <div className="title">
          You don't have an account?
          <span>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
