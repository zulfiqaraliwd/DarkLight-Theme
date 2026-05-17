import { createContext ,useState} from "react";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";



export const contextTheme = createContext()
function App() {
  const [theme , setTheme] = useState("Zulfiqar Ali")
  return (
 <>
<contextTheme.Provider value = {theme}>
<Navbar />
<Main/>
<Footer/>
</contextTheme.Provider>


  

 </>
  );
}

export default App;
