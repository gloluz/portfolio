import React, { useState, useEffect } from "react";
import { ColumnProject } from "../Layout";
import TypeForm from "../../assets/Pictures/typeform.png";
import Deliveroo from "../../assets/Pictures/deliveroo.png";
import Tripadvisor from "../../assets/Pictures/tripadvisor.png";
import LeBonCoin from "../../assets/Pictures/leboncoin.png";
import Project from "../Layout/Project";
import styled, { css, keyframes } from "styled-components";
import { ItemMenu } from "../Menu";

const computerAnimation = keyframes`
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translate(0);
  }
`;

const Computer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  animation: ${computerAnimation} ease 0.4s;
`;

const Screen = styled.div`
  border: 15px solid black;
  border-right-width: 15px;
  border-left-width: 15px;
  border-top-width: 40px;
  border-bottom: none;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  box-shadow: 0 0 0 6px #d9d9d9;
  position: relative;
  width: 100%;
  background-color: #f4f4f4;
`;

const Camera = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #333;
  position: absolute;
  top: 10px;
  left: 50%;
  z-index: 1;
  overflow: hidden;

  &:before {
    content: "";
    display: block;
    box-sizing: border-box;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: linear-gradient(30deg, rgba(255, 255, 255, 0.4) 25%, #000 25%);
    border: 2px solid #111;
    z-index: 2;
  }
`;

interface WindowProps {
  showWindow: boolean;
}

const Window = styled.div<WindowProps>`
  overflow: hidden;
  border-radius: 4px 0 0 0;
  position: absolute;
  top: 10px;
  bottom: 0;
  right: 0;
  left: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s all ease;
  transform-origin: right bottom;
  transform: scale(0);

  ${({ showWindow }) =>
    showWindow &&
    css`
      transform: scale(1);
    `}
`;

const TopBar = styled.div`
  height: 20px;
  width: 100%;
  background: rgba(230, 234, 237);
  display: flex;
  padding-left: 5px;
`;

const Button = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-top: 6px;
  margin-left: 5px;
  cursor: pointer;
`;

export const RedButton = styled(Button)`
  background-color: rgb(255, 55, 55);
`;

export const YellowButton = styled(Button)`
  background-color: rgb(255, 193, 0);
`;

export const GreenButton = styled(Button)`
  background-color: rgb(0, 208, 60);
`;

const Scrollable = styled.div`
  position: absolute;
  top: 20px;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  padding: 10px;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export interface ProjectProps {
  selectedTab: ItemMenu;
}

const Projects = ({ selectedTab }: ProjectProps) => {
  const [showWindow, setShowWindow] = useState(false);
  const [showPictures, setShowPictures] = useState(false);

  useEffect(() => {
    if (selectedTab !== "projects") {
      return;
    }

    const timeout1 = setTimeout(() => setShowWindow(true), 400);
    const timeout2 = setTimeout(() => setShowPictures(true), 500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [selectedTab]);

  return (
    <Computer>
      <Camera />
      <Screen>
        <Window showWindow={showWindow}>
          <TopBar>
            <RedButton />
            <YellowButton />
            <GreenButton />

            <Scrollable>
              {showPictures && (
                <ProjectContainer>
                  <ColumnProject>
                    <Project
                      websiteUrl="https://typeform-certif.netlify.com"
                      pictureSrc={TypeForm}
                      title="Gestionnaire de formulaires"
                      subTitle="Création et modifications de questions / réponses "
                    />

                    <Project
                      websiteUrl="https://boring-bardeen-4d94ae.netlify.com"
                      pictureSrc={Tripadvisor}
                      title="Réplique d'une page Tripadvisor"
                      subTitle="Intégration HTML/CSS uniquement"
                    />
                  </ColumnProject>

                  <ColumnProject>
                    <Project
                      websiteUrl="https://amazing-aryabhata-c805ca.netlify.com"
                      pictureSrc={LeBonCoin}
                      title="Réplique de LeBonCoin"
                      subTitle={
                        <>
                          Création de comptes, connexion, dépôt d'annonces,
                          <br />
                          paiement
                        </>
                      }
                    />

                    <Project
                      websiteUrl="https://dazzling-raman-a7be69.netlify.com"
                      pictureSrc={Deliveroo}
                      title="Réplique d'une page Deliveroo"
                      subTitle="Ajout/ suppression d'articles dans le panier"
                    />
                  </ColumnProject>
                </ProjectContainer>
              )}
            </Scrollable>
          </TopBar>
        </Window>
      </Screen>
    </Computer>
  );
};

export default Projects;
