import React from "react";
import "./App.css";
import logo from "./assets/logo.png";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} className="logo" />
        </div>

        <div className="nav-right">
          <a href="#home">Home</a>
          <a href="#assist">Assist</a>
          <a href="#projects">Selected Work</a>
          <a href="#Experience">My Experience</a>
          <a href="#contact">Book a Call</a>
        </div>
      </nav>

      <Home />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
