import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from "./pages/Login/Login.jsx"
import Layout from './components/Layout.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider router={router}/>
</StrictMode>
)
