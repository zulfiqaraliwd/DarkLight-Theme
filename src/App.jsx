import React, { useContext } from "react";
import  "./App.css"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

import ThemeProvider, { themeContext } from "./Components/ThemeContext";


function AppContent() {

  const { theme } = useContext(themeContext);

  const myStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "dark" ? "white" : "black",
    minHeight: "100vh",
  };


  return (
    <div style={myStyle}>

      <Navbar />

      <Body />

      <Footer />

    </div>
  );
}



function App() {

  return (

    <ThemeProvider>

      <AppContent />

    </ThemeProvider>

  );

}


export default App;