
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
    return (
        <nav>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </nav>
    )
}

export default Navbar
