import React, { useContext } from 'react'
import "./Navbar.css"
import { themeContext } from "./ThemeContext"

function Navbar() {

  const { theme, changeTheme } = useContext(themeContext)

  return (

    <nav className="navbar">

      <h1>{theme}</h1>

      <button onClick={changeTheme}>
        Dark / Light
      </button>

    </nav>

  )
}

export default Navbar