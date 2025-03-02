import React, { useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { auth } from './firebase'; // Import Firebase auth
import Layout from './components/Layout.jsx';
import Player from './pages/Players/Player.jsx'
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="player/:playerid" element={<Player/>}/>
    </Route>
  )
)
function App() {
  return (
  <>
    <ToastContainer theme='dark'/>
<RouterProvider router={router} />
</>
  )
}

export default App
