import React, { CSSProperties } from "react";
import "./App.scss";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Cv from "./pages/cv/cv";
import Pages404 from "./pages/404";
import NavBar from "./components/components/nav";
import Footer from "./components/components/footer";
import About from "./pages/about";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <div className="body">
        {" "}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Pages404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
