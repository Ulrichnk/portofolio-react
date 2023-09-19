import React from "react";
import "./css/App.scss";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Cv from "./pages/cv/cv";
import Pages404 from "./pages/404";
import NavBar from "./components/components/nav";
import Footer from "./components/components/footer";
import About from "./pages/about";
import Education from "./pages/competences";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Competences from "./pages/competences";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Home />
        <NavBar />
        <About />
        <Competences />
        <Experience />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
