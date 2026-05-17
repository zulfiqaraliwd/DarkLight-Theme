import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Zulfiqar Ali
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