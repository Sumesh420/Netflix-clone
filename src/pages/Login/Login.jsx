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
  const [loader,setLoader]=useState(false)
  const [errors,setErrors]=useState({name:"",email:"",password:""});
  

  //Function for validation of input fields
  const validate=()=>{
    let isValid=true;
    let newErrors={name:"",email:"",password:""};
    //Name validation
    if(signState==="Sign Up"){
        if(!name.trim()){
          newErrors.name="Name is required"
          isValid=false
        }
        else if(!/^[a-zA-Z]+$/.test(name)){
          newErrors.name="Please add a valid name"
          isValid=false
        }
        else if(name.length<3){
          newErrors.name="Must be 3 characters long"
          isValid=false
        }
    }

   //Email Validation
   if(!email.trim()){
    newErrors.email="Please provide a email"
    isValid=false
   }
   else if(!/^\S+@\S+\.\S+$/.test(email)){
    newErrors.email="Please provide a valid email"
    isValid=false
   }

   //Password Validation
   if(!password){
    newErrors.password="Enter password"
    isValid=false
   }
   else if(password.length<10){
    newErrors.password="Password must be at least 10 characters "
    isValid=false
   }
   setErrors(newErrors);
   return isValid
  }

  const user_auth=async (e) =>{
    e.preventDefault();
    if(!validate()) return 
    setLoader(true);
    if(signState==="Sign In"){
     await logIn(email,password);
    }else{
     await signUp(name,email,password);
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
            <>
            <input type="text" placeholder="Your name" onChange={(e)=>setName(e.target.value)} />
            {errors.name && <p className="error">{errors.name}</p>}
            </>
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your-email" onChange={(e)=>setEmail(e.target.value)}  />
         {errors.email && <p className="error">{errors.email}</p>}
          <input type="password" placeholder="Your Password" onChange={(e)=>setPassword(e.target.value)}/>
          {errors.password && <p className="error">{errors.password}</p>}
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
