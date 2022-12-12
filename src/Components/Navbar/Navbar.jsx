import React, { useState } from "react";
import "./navbar.css";
import MobileMenu from "./MobileMenu.jsx";

const Navbar = ({ theme }) => {
  return (
    <>
      <nav className={theme === "light" ? "lightNav  flex" : "navBar flex"}>
        <div className="navMenu flex">
          <a
            className={
              theme === "light" ? "lightLink homeNav" : "navLink homeNav"
            }
            href="#home"
            onClick={active}
          >
            Home
          </a>
          <a
            className={
              theme === "light" ? "lightLink portNav" : "navLink portNav"
            }
            href="#portfolio"
            onClick={active}
          >
            Portfolio
          </a>
          <a
            className={
              theme === "light" ? "lightLink aboutNav" : "navLink aboutNav"
            }
            href="#about"
            onClick={active}
          >
            About
          </a>
          <a
            className={
              theme === "light" ? "lightLink serviceNav" : "navLink serviceNav"
            }
            href="#services"
            onClick={active}
          >
            Services
          </a>
          <a
            className={
              theme === "light" ? "lightLink skillNav" : "navLink skillNav"
            }
            href="#skills"
            onClick={active}
          >
            Skills
          </a>
          <a
            className={
              theme === "light" ? "lightLink contactNav" : "navLink contactNav"
            }
            href="#blog"
            onClick={active}
          >
            Blogs
          </a>
          <a
            className={
              theme === "light" ? "lightLink contactNav" : "navLink contactNav"
            }
            href="#contact"
            onClick={active}
          >
            Contact
          </a>
        </div>
        <div className="mobile_menu">
          <div
            className="mobile_home"
            style={theme === "light" ? { opacity: "1" } : { opacity: "0" }}
          >
            <a href="#home">
              Rahul<span>.</span>
            </a>
          </div>
          <div className="mobile_menu_container">
          <MobileMenu  theme={theme} />
          </div>
        </div>
      </nav>
    </>
  );
};

function active(e) {
  // console.log(e);
  let btns = document.querySelectorAll(".lightLink");
  btns.forEach((elem) => {
    console.log(elem.classList);
    elem.classList.remove("active");
  });
  if (e.target.className === "active") {
  } else {
    e.target.classList.add("active");
  }
}

export default Navbar;
