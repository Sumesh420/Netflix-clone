import React,{useEffect} from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from '../pages/Home/Home'
export default function Layout() {
  
    const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login"); // Redirect to login page if logged out
      }
    });
  }, [navigate]);
  return (
    <div>
      <Outlet/>
    </div>
  )
}
