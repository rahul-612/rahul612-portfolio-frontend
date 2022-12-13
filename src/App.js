import React,{useEffect} from 'react'
import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar.jsx"
import Home from "./Components/Home/Home.jsx"
// import Portfolio from "./Components/Portfolio/Portfolio.jsx"
// import About from "./Components/About/About.jsx"
// import Services from "./Components/Services/Services.jsx"
// import Skills from "./Components/Skills/Skills.jsx"
// import Contact from "./Components/Contact/Contact.jsx"
// import Blog from "./Components/Blog/Blog.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Lines from './Components/utility/lines/Lines';
import AwsNginx from "./Components/Blog/Articles/AwsNginx.jsx"
import AwsCi from "./Components/Blog/Articles/AwsCi.jsx"
import AwsRoute53 from "./Components/Blog/Articles/AwsRoute53.jsx"
import Prism from "prismjs"
// import "./prism.css"
// import "./prism.js"
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "prismjs/themes/prism.css"
import "prismjs/themes/prism-okaidia.min.css"


const App = () => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  
  return (
    <>
    {/* <Router basename="/">
    <div className="siteContainer">
    <Lines/>
    <Home />
    <Portfolio/>
    <About/>
    <Services/>
    <Skills/>
    <Blog/>
    <Contact/>
    </div>
    <Routes>
    article routes
    <Route path='/article/aws/nginx' element={<AwsNginx/>}/>
    </Routes>
    <Footer/>
    </Router> */}

    <Router basename="/">
    <div className="siteContainer">
    <Lines/>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/' element={<About/>}/>
    <Route path='/' element={<Services/>}/>
    <Route path='/' element={<Blog/>}/> */}
    {/* <Home />
    <Portfolio/>
    <About/>
    <Services/>
    <Skills/>
    <Blog/>
    <Contact/> */}
    {/* article routes */}
    <Route path='/article/aws/nginx' element={<AwsNginx/>}/>
    <Route path='/article/aws/cicd' element={<AwsCi/>}/>
    <Route path='/article/aws/route53' element={<AwsRoute53/>}/>
    </Routes>
    </div>
    <Footer/>
    </Router>
    </>
  )
}

export default App