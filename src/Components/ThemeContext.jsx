import React, { createContext, useState } from "react";

export const themeContext = createContext();

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {

    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );

  };


  return (

    <themeContext.Provider 
      value={{ theme, changeTheme }}
    >

      {children}

    </themeContext.Provider>

  );

}

export default ThemeProvider;