import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Over Protocol</Link>
        <Link to="/mobile">Mobile</Link>
        <Link to="/pc">PC</Link>
        <Link to="/media">Media</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>

  )
}

export default Navbar
