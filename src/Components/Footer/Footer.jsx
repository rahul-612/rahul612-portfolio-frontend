import React from "react";
import "./footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  let location=useLocation();
  
  return (
    <section id="footer">
      <div className="footerContainer">
        <div className="footerLogo footerChild">
          {/* <a href={location.pathname === "/" ? "#home" : "/"}>
            Rahul<span>.</span>
          </a> */}
          {location.pathname === "/" ? <a href="#home">Rahul<span>.</span></a> :<Link to="/">Rahul<span>.</span></Link>}
        </div>
        <ul className="footerChild footerSocialSites">
          <li>
            <a href="https://www.linkedin.com/in/rahul-kumar-83658a222">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/rahul-612">GitHub</a>
          </li>
          <li>
            <a href="https://www.instagram.com/blessed_612/">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/Rk785164">Facebook</a>
          </li>
        </ul>
        <p className="footerCopyright footerChild">
          Copyright © 2022 | made with &hearts; by Rahul
        </p>
      </div>
    </section>
  );
};

export default Footer;
