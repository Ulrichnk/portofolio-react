import React, { FunctionComponent, useEffect, useRef, useState } from "react";
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
    // Nethrefyer l'écouteur d'événement lors du démontage du composant
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

  const navClass = state ? "nav-links open" : "nav-links closed ";
  return screenSize.width <= 790 ? (
    <div>
      <div className="burger" onClick={(e) => handleClik(e)}>
        <CiMenuBurger className="b" />
      </div>
      <div ref={navRef} className={navClass}>
        <ul className="">
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <a href="/#" className="link-1">
              <AiFillHome className="icon" />
              <div>Home </div>
            </a>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <a href="#about-me" className="link-1">
              <RiContactsFill className="icon" />
              <div>About me</div>
            </a>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <a href="#competences" className="link-1">
              <FaUserGraduate className="icon" />
              <div>Compétences</div>
            </a>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <a href="#experience" className="link-1">
              <FaSuitcase className="icon" />
              <div>Expériences</div>
            </a>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <a href="#project" className="link-1">
              <AiOutlineFundProjectionScreen className="icon" />
              <div>Projects</div>
            </a>
          </li>
          <li
            className="link"
            onClick={(e) => {
              handleClik(e);
            }}
          >
            <a href="#contact" className="link-1">
              <GrMail className="icon" />
              <div>Contact me</div>
            </a>
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

            <a href="/#">Home</a>
          </li>
          <li className="link">
            <RiContactsFill className="icon" />

            <a href="#about-me">About me</a>
          </li>
          <li className="link">
            {" "}
            <FaUserGraduate className="icon" />
            <a href="#competences">Compétences</a>
          </li>
          <li className="link">
            {" "}
            <FaSuitcase className="icon" />
            <a href="#experience">Expériences</a>
          </li>
          <li className="link">
            {" "}
            <AiOutlineFundProjectionScreen className="icon" />
            <a href="#project">Projects</a>
          </li>
          <li className="link">
            {" "}
            <GrMail className="icon" />
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
