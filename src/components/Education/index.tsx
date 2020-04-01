import React, { useState, useEffect } from "react";

import PaperClip from "../PaperClip";
import styled, { keyframes } from "styled-components";
import { ItemMenu } from "../Menu";
import {
  EducationStyled,
  HorizontalBorder,
  EducationTitle,
  EducationResume
} from "../Layout";

const blackboardAnimation = keyframes`
  0% {
    transform: translate(100vw);
  }
  100% {
    transform: translate(0);
  }
`;

const BlackBoard = styled.div`
  position: relative;
  background-color: #16160a;
  margin-bottom: 20px;
  border: 40px solid #f3a433;
  border-radius: 10px;
  position: relative;
  animation: ${blackboardAnimation} 0.4s ease;
`;

const Pin = styled.div`
  height: 50px;
  width: 50px;
  z-index: 3;
  position: absolute;
  top: -40px;
  left: calc(30% - 62px);
  background: radial-gradient(
      30px 30px at 15px 15px,
      #e43d34 38%,
      transparent 40%
    ),
    radial-gradient(20px 20px at 28px 20px, #e43d34 38%, transparent 40%),
    linear-gradient(25deg, transparent 42%, grey 45%, grey 55%, transparent 58%)
      no-repeat 30px 18px / 15px 15px;
`;

interface EducationProps {
  selectedTab: ItemMenu;
}

const Education = ({ selectedTab }: EducationProps) => {
  const [rotate, setRotate] = useState(-10);

  useEffect(() => {
    if (selectedTab !== "education") {
      return;
    }

    const timeout1 = setTimeout(() => setRotate(10), 200);
    const timeout2 = setTimeout(() => setRotate(-8), 400);
    const timeout3 = setTimeout(() => setRotate(6), 600);
    const timeout4 = setTimeout(() => setRotate(-4), 800);
    const timeout5 = setTimeout(() => setRotate(3), 1000);
    const timeout6 = setTimeout(() => setRotate(-2), 1200);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
    };
  }, [selectedTab]);

  return (
    <BlackBoard>
      <Pin />

      <div>
        <EducationStyled>
          <HorizontalBorder />
          <EducationTitle rotate={rotate}>
            <div>
              <PaperClip />
            </div>
            2 au 13 mars 2020 : Développeuse front-end pour AKO - Paris
          </EducationTitle>
          <EducationResume>
            Développement de l'application AKO, dans le cadre d'un Produit
            Minimum Viable, en partenariat avec Koudetat/The Family. <br />
            Cette application a pour but le partage de connaissances. Le
            principe je donne un cours, je gagne des points pour prendre un
            cours dans le domaine que je souhaite.
          </EducationResume>
        </EducationStyled>

        <EducationStyled>
          <HorizontalBorder />
          <EducationTitle rotate={rotate}>
            <div>
              <PaperClip />
            </div>
            Janvier - Mars 2020 : Formation développeur web et mobile à Le
            Reacteur - Paris
          </EducationTitle>
          <EducationResume>
            J'ai suivi cette formation intensive, axée sur React/React Native,
            dans le cadre d'une reconversion professionnelle. <br />
            Durant cette formation j'ai pu réaliser plusieurs projets aussi bien
            front-end que back-end.
          </EducationResume>
        </EducationStyled>

        <EducationStyled>
          <HorizontalBorder />
          <EducationTitle rotate={rotate}>
            <div>
              <PaperClip />
            </div>
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
      </div>
    </BlackBoard>
  );
};

export default Education;
