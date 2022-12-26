import React from "react"
import './App.css';
import Header from "./Header"
import Home from "./Home";
import GoFundMe from "./GoFundMe";
import Contact from "./Contact";
import Projects from "./Projects"
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