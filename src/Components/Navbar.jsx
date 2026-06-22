import React, { useContext } from "react";
import { themeContext } from "./ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, changeTheme } = useContext(themeContext);

  return (
    <nav>
      <h1>{theme}</h1>

      <button onClick={changeTheme}>
        Dark / Light
      </button>
    </nav>
  );
}

export default Navbar;