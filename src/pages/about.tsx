import React, { FunctionComponent } from "react";

type Props = {
  //define your props here
};

const About: FunctionComponent<Props> = ({}) => {
  return (
    <div className="about" id="about-me">
      <h1 className="txt-center"> À propos</h1>
      <p className="txt-center">
        Je suis actuellement étudiant en Master 1 en Ingénierie Mathématiques
        Appliquées à la Finance avec une réelle passion pour le domaine de
        l'actuariat. Mon parcours académique m'a offert une solide base en
        mathématiques et en finance, ainsi que des compétences en développement
        informatique. Je souhaite devenir un expert dans l'évaluation et la
        gestion des risques financiers.
      </p>
    </div>
  );
};

export default About;
