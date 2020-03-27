import React from "react";
import {
  EducationTitle,
  EducationResume,
  EducationStyled,
  HorizontalBorder
} from "../Layout";

import Flex from "../Layout/Flex";

const Education = () => {
  return (
    <>
      <Flex
        direction="column"
        flex="1"
        align="center"
        style={{ position: "relative" }}
      >
        <EducationStyled>
          <EducationTitle>
            2 au 13 mars 2020 : Développeuse front-end pour AKO - Paris
          </EducationTitle>
          <EducationResume>
            Développement de l'application AKO, dans le cadre d'un MVP, en
            partenariat avec Koudetat/The Family. <br />
            Cette application a pour but le partage de connaissances. Le
            principe je donne un cours, je gagne des points pour prendre un
            cours dans le domaine que je souhaite.
          </EducationResume>
        </EducationStyled>

        <EducationStyled>
          <EducationTitle>
            Janvier - Mars 2020 : Formation développeur web et mobile à Le
            Reacteur - Paris
          </EducationTitle>
          <EducationResume>
            J'ai suivi cette formation intensive, axée sur React/React Native,
            dans le cadre d'une reconversion professionnelle. <br />
            Durant cette formation j'ai pu réaliser plusieurs projets front-end,
            back-end et également fullstack.
          </EducationResume>
        </EducationStyled>

        <EducationStyled>
          <EducationTitle>
            Août 2014 - Janvier 2020 : Infirmière à l'hôpital Robert Debré -
            Paris
          </EducationTitle>
          <EducationResume>
            Durant ces années d'exercice je n'ai pas tapé une ligne de code. J'y
            ai en revanche appris le travail en équipe, l'autonomie et la
            rigueur. J'ai également pu améliorer mon relationnel. Enfin, j'ai
            également dû apprendre à gérer mon stress dans ce métier qui ne
            laisse pas sa place à l'erreur.
          </EducationResume>
        </EducationStyled>

        <HorizontalBorder />
      </Flex>
    </>
  );
};

export default Education;
