import React from "react";
import "../style.scss";

const Register = () => {
  return (
    <div className="FormContainer">
      <div className="FormWrap">
        <div className="logo">Chat box</div>
        <div className="title">Register</div>
        <form>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input className="FileInput" type="file" id="file" />
          <label htmlFor="file" className="ImgInput">Choose an image</label>
          <button>Sign up</button>
        </form>
        <div className="title">
          Do you have an account?{" "}
          <span>
            <a href="#">Login</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
