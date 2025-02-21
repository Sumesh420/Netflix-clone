import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
export default function Login() {
  const [signState,setSignState]=useState("Sign In");
  return (
    <div className="login">
      <img src={logo} alt="netflix_logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
         {signState==="Sign Up"? <input type="text" placeholder="Your name" />:<></>}
          <input type="email" placeholder="Your-email" />
          <input type="password" placeholder="Your Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="check"/>
              <label htmlFor="check">Remember Me</label>
            </div>
            <p>Need Help??</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"? <p>New on Netflix?<span>Sign Up Now</span></p>: <p>Already have an Account?<span>Sign In Now</span></p>}
        
         
        </div>
      </div>
    </div>
  );
}
