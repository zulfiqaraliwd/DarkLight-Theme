import React, { useContext } from "react";
import { themeContext } from "./ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, changeTheme } = useContext(themeContext);

  return (
    <nav>
      <h1>{theme}</h1>

   <button
  onClick={changeTheme}
  style={{
    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
    color: "white",
    border: "none",
    padding: "12px 28px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(124, 58, 237, 0.4)",
    transition: "all 0.3s ease",
  }}
>
  🌙 Dark / ☀️ Light
</button>
      

      <ul style={{display:"flex", gap:"20px" , justifyContent:"space-around"}}>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      </ul>
    </nav>
  );
}

export default Navbar;