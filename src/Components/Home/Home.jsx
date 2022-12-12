import React from "react";
import Navbar from "../Navbar/Navbar";
import "./home.css";
import "./home_res.css";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import Portfolio from "../Portfolio/Portfolio.jsx"
import About from "../About/About.jsx"
import Services from "../Services/Services.jsx"
import Skills from "../Skills/Skills.jsx"
import Contact from "../Contact/Contact.jsx"
import Blog from "../Blog/Blog.jsx"

const Home = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      <section id="home">
        {inView ? <Navbar theme="dark" /> : <Navbar theme="light" />}
        <div className="homeHead flex">
          <h1>Hello, I'm</h1> <span>Rahul Kumar</span>{" "}
          {/* <strong>And this is my resume</strong> */}
          <strong>
            <Typewriter
              options={{
                strings: [
                  "I love to code.",
                  "A Full Stack Web Developer.",
                  "A Designer.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </strong>
          <div className="scrollBtn">
            <a href="#portfolio">
              <span ref={ref}></span>
            </a>
          </div>
        </div>
      </section>
      <Portfolio/>
    <About/>
    <Services/>
    <Skills/>
    <Blog/>
    <Contact/>
    </>
  );
};

export default Home;
