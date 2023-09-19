import React, { FunctionComponent } from "react";

type Props = {
  //define your props here
};

const Competences: FunctionComponent<Props> = ({}) => {
  return (
    <div className="competences" id="competences">
      <h1 className="txt-center">Compétences</h1>
      <div className="cont-competences flexCenter">
        <div className="competence">
          <h2>Mathématiques</h2>
        </div>
        <div className="competence">
          <h2>Programmation</h2>
        </div>
        <div className="competence">
          <h2>Développement web</h2>
        </div>
      </div>
    </div>
  );
};

export default Competences;
