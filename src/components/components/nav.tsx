import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaSuitcase } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { CiMenuBurger } from "react-icons/ci";
type Props = {
  //define your props here
};
const NavBar: FunctionComponent<Props> = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [state, setS] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // Ajouter un écouteur d'événement pour redimensionner la fenêtre
    window.addEventListener("resize", handleResize);
    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);
  const handleClik = (e: any) => {
    setS(!state);
    // console.log(e.target);
    // if (! state && navRef && navRef.current) {
    //   setS(true);
    //   console.log(navRef.current.clientWidth);
    //   navRef.current.style.width = "0";
    //   return;
    // } if (state && navRef && navRef.current) {
    //   setS(false);
    //   navRef.current.style.width = screenSize.width + "px";

    // }
  };

  const navClass = state ? "nav-links open" : "nav-links ";
  return screenSize.width <= 790 ? (
    <div className="">
      <div className="burger" onClick={(e) => handleClik(e)}>
        <CiMenuBurger className="b" />
      </div>
      <div ref={navRef} className={navClass}>
        <ul className="flex-column">
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <AiFillHome className="icon" />

            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <RiContactsFill className="icon" />

            <NavLink to="/about-me">About me</NavLink>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <FaUserGraduate className="icon" />
            <NavLink to="/education">Education</NavLink>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <FaSuitcase className="icon" />
            <NavLink to="/experience">Expériences</NavLink>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <AiOutlineFundProjectionScreen className="icon" />
            <NavLink to="/project">Projects</NavLink>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <GrMail className="icon" />
            <NavLink to="/contact">Contact me</NavLink>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="flexCenter">
      <div style={{ display: "none" }}>
        <p>Taille de l'écran:</p>
        <p>Largeur: {screenSize.width}px</p>
        <p>Hauteur: {screenSize.height}px</p>
      </div>

      <div className="nav-links  ">
        <ul className="flex-row">
          <li className="link">
            <AiFillHome className="icon" />

            <NavLink to="/">Home</NavLink>
          </li>
          <li className="link">
            <RiContactsFill className="icon" />

            <NavLink to="/about-me">About me</NavLink>
          </li>
          <li className="link">
            {" "}
            <FaUserGraduate className="icon" />
            <NavLink to="/education">Education</NavLink>
          </li>
          <li className="link">
            {" "}
            <FaSuitcase className="icon" />
            <NavLink to="/experience">Expériences</NavLink>
          </li>
          <li className="link">
            {" "}
            <AiOutlineFundProjectionScreen className="icon" />
            <NavLink to="/project">Projects</NavLink>
          </li>
          <li className="link">
            {" "}
            <GrMail className="icon" />
            <NavLink to="/contact">Contact me</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
