import React, { createContext, useState } from 'react'

export const themeContext = createContext()

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light")

  const changeTheme=()=>{
    if (theme == "light"){
        setTheme("dark")
    }
    if (theme ==  

  }

  return (

    <themeContext.Provider value={{theme,changeTheme}}>

      {children}

    </themeContext.Provider>

  )
}

export default ThemeProvider