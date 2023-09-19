import React, { FunctionComponent } from "react";
import "./home.scss";
type Props = {
  //define your props here
};

const Home: FunctionComponent<Props> = ({}) => {
  return (
    <div className="mt-300 home " id="home">
      <h1 className="">
        <span data-letter=" "> </span>
        <span data-letter="I">I</span>
        <span data-letter="'">'</span>
        <span data-letter="m">m</span>
        <span data-letter=" "> </span>
        <span data-letter="N">N</span>
        <span data-letter="G">G</span>
        <span data-letter="U">U</span>
        <span data-letter="E">E</span>
        <span data-letter="P">P</span>
        <span data-letter="K">K</span>
        <span data-letter="A">A</span>
        <span data-letter="P">P</span>
        <span data-letter=" "> </span>
        <span data-letter="U">U</span>
        <span data-letter="l">l</span>
        <span data-letter="r">r</span>
        <span data-letter="i">i</span>
        <span data-letter="c">c</span>
        <span data-letter="h">h</span>
      </h1>
      <div>
        <p>
          Étudiant en 2ème année de cycle ingénieur Mathématiques appliquées aux
          finances à <a href="https://cytech.cyu.fr/" target="_blank" rel="noreferrer">CY TECH</a>
        </p>
      </div>
      <button  className="">
        <a href="./cv/cv_ulrich_kapap.pdf" target="_blank" rel="noreferrer">
          Mon CV
        </a>
      </button>
      <div className="img-container flexCenter" style={{ display: "none" }}>
        {/* <img src="./ulrich.jpg" alt="me" className="img-fluid"/> */}
        <div className="img"></div>d b
      </div>
    </div>
  );
};

export default Home;
