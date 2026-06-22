import React, { useContext } from "react";
import { themeContext } from "./ThemeContext";

function Navbar() {
  const { theme, changeTheme } = useContext(themeContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        ZULFIQAR ALI
      </h2>

      {/* Menu */}
      <ul
        style={{
          display: "flex",
          gap: "30px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontSize: "18px",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      {/* Theme Button */}
      <button
        onClick={changeTheme}
        style={{
          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "30px",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(124, 58, 237, 0.4)",
          transition: "0.3s",
        }}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;