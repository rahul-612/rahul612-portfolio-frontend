import React,{useEffect} from 'react'
import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar.jsx"
import Home from "./Components/Home/Home.jsx"
import Portfolio from "./Components/Portfolio/Portfolio.jsx"
import About from "./Components/About/About.jsx"
import Services from "./Components/Services/Services.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Lines from './Components/utility/lines/Lines';

const App = () => {

  return (
    <>
    <Router basename="/">
    {/* <Navbar/> */}
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes> */}
    <div className="siteContainer">
    <Lines/>
    <Home />
    <Portfolio/>
    <About/>
    <Services/>
    <Skills/>
    <Contact/>
    </div>
    <Footer/>
    </Router>
    </>
  )
}

export default App