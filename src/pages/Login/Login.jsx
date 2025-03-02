import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import netflix_spinner from "../../assets/netflix_spinner.gif"
import {signUp,logIn} from "../../firebase";
export default function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loader,setLoader]=useState(false);

  const user_auth=async (e) =>{
    e.preventDefault();
    setLoader(true);
    if(signState==="Sign In"){
      logIn(email,password);
    }else{
      signUp(name,email,password);
    }
    setLoader(false);
  }
  return (
    loader?<div className="loading">
      <img src={netflix_spinner} alt="loader" />
    </div>:
    <div className="login">
      <img src={logo} alt="netflix_logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" onChange={(e)=>setName(e.target.value)} />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your-email" onChange={(e)=>setEmail(e.target.value)}  />
          <input type="password" placeholder="Your Password" onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={user_auth} type="submit" >{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember Me</label>
            </div>
            <p>Need Help??</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New on Netflix?<span onClick={()=>setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an Account?<span onClick={()=>setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
