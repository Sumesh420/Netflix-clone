import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home/Home'
export default function Layout() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
