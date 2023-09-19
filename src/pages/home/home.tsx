import React, { FunctionComponent } from "react";

type Props = {
  //define your props here
};

const Home: FunctionComponent<Props> = ({}) => {
  return (
    <div className="mt-100 home " id="home">
      <h1 className="txt-center">
        <span data-letter="H">H</span>
        <span data-letter="i">i</span>
        <span data-letter=",">,</span>
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
        <span data-letter="K">K</span>
        <span data-letter="A">A</span>
        <span data-letter="P">P</span>
        <span data-letter="T">T</span>
        <span data-letter="C">C</span>
        <span data-letter="H">H</span>
        <span data-letter="U">U</span>
        <span data-letter="A">A</span>
        <span data-letter="N">N</span>
        <span data-letter="G">G</span>
        <span data-letter=" "> </span>
        <span data-letter="U">U</span>
        <span data-letter="L">L</span>
        <span data-letter="R">R</span>
        <span data-letter="I">I</span>
        <span data-letter="C">C</span>
        <span data-letter="H">H</span>
      </h1>
      <div className="img-container flexCenter">
        {/* <img src="./ulrich.jpg" alt="me" className="img-fluid"/> */}
        <div className="img"></div>
      </div>
    </div>
  );
};

export default Home;
