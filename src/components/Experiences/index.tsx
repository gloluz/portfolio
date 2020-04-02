import React, { useState, useEffect } from "react";

import PaperClip from "../PaperClip";
import { ItemMenu } from "../Menu";
import { BoxedContainer } from "../Layout";
import {
  BlackBoard,
  Pin,
  ExperienceStyled,
  ExperienceTitle,
  ExperienceResume,
  HorizontalBorder
} from "./styles";

interface ExperiencesProps {
  selectedTab: ItemMenu;
}

const Experiences = ({ selectedTab }: ExperiencesProps) => {
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
    <BoxedContainer>
      <BlackBoard>
        <Pin />

        <div>
          <ExperienceStyled>
            <HorizontalBorder />
            <ExperienceTitle rotate={rotate}>
              <div>
                <PaperClip />
              </div>
              2 au 13 mars 2020 : Développeuse front-end pour AKO - Paris
            </ExperienceTitle>
            <ExperienceResume>
              Développement de l'application AKO, dans le cadre d'un Produit
              Minimum Viable, en partenariat avec Koudetat/The Family. <br />
              Cette application a pour but le partage de connaissances. Le
              principe je donne un cours, je gagne des points pour prendre un
              cours dans le domaine que je souhaite.
            </ExperienceResume>
          </ExperienceStyled>

          <ExperienceStyled>
            <HorizontalBorder />
            <ExperienceTitle rotate={rotate}>
              <div>
                <PaperClip />
              </div>
              Janvier - Mars 2020 : Formation développeur web et mobile à Le
              Reacteur - Paris
            </ExperienceTitle>
            <ExperienceResume>
              J'ai suivi cette formation intensive, axée sur React/React Native,
              dans le cadre d'une reconversion professionnelle. <br />
              Durant cette formation j'ai pu réaliser plusieurs projets aussi
              bien front-end que back-end.
            </ExperienceResume>
          </ExperienceStyled>

          <ExperienceStyled>
            <HorizontalBorder />
            <ExperienceTitle rotate={rotate}>
              <div>
                <PaperClip />
              </div>
              Août 2014 - Janvier 2020 : Infirmière à l'hôpital Robert Debré -
              Paris
            </ExperienceTitle>
            <ExperienceResume>
              Durant ces années d'exercice je n'ai pas tapé une ligne de code.
              J'y ai en revanche appris le travail en équipe, l'autonomie et la
              rigueur. J'ai également pu améliorer mon relationnel. Enfin, j'ai
              également dû apprendre à gérer mon stress dans ce métier qui ne
              laisse pas sa place à l'erreur.
            </ExperienceResume>
          </ExperienceStyled>
        </div>
      </BlackBoard>
    </BoxedContainer>
  );
};

export default Experiences;
