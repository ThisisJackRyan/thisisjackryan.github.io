import React from "react"
import Header from "./Header"
import Home from "./pages/Home";
import GoFundMe from "./pages/GoFundMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects"
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route  path="/Projects" element={<Projects />} />
        <Route  path="/GoFundMe" element={<GoFundMe />} />
        <Route  path="/Contact" element={<Contact />} />
     </Routes>
    </div>
   
    
  );
}


export default App;