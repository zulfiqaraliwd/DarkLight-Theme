import React, { useContext } from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Body from './Components/Body'
import ThemeContext from "./Components/ThemeContext"


function App() {
  const {theme,changeTheme} = useContext(themeContext)
  const myStyle = {
    backgroundColor : "red"
  }

  return (
    
    <>
 
<ThemeContext>
      <Navbar />
      <Body />
      <Footer />
</ThemeContext>
   
    </>
  )
}

export default App
