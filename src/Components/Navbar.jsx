import React, { useContext } from 'react'
import "./Navbar.css"
import { contextTheme } from '../App';

function Navbar() {
    const data = useContext(contextTheme)
  return (
    <nav className="navbar">

      <div className="logo">
 <h1>{data}</h1>       
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <button className="nav-btn">
        Login
      </button>

     

    </nav>
  );
}

export default Navbar;