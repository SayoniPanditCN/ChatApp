import React from "react";
import "../style.scss";

const Login = () => {
  return (
    <div className="FormContainer">
      <div className="FormWrap">
        <div className="logo">Chat box</div>
        <div className="title">Login</div>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <div className="title">
          You don't have an account?
          <span>
            <a href="#">Sign up</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
