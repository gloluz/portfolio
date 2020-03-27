import React from "react";
import { ColumnProject } from "../Layout";
import TypeForm from "../../assets/Pictures/typeform.png";
import Deliveroo from "../../assets/Pictures/deliveroo.png";
import Tripadvisor from "../../assets/Pictures/tripadvisor.png";
import LeBonCoin from "../../assets/Pictures/leboncoin.png";
import Project from "../Layout/Project";
import styled from "styled-components";

// const Animation = keyframes`
//   0% {
//     transform: translate(-100px)
//   }
//   100% {

//   }
// `;

const Animate = styled.div``;

const Computer = styled.div`
  border: 15px solid black;
  border-right-width: 15px;
  border-top-width: 40px;
  border-right: none;
  border-bottom: none;
  border-radius: 20px 0 0 0;
  overflow: hidden;
  box-shadow: 0 0 0 10px #aaaaaa;
  margin: 20px 0 0 20px;
  position: relative;
  width: 100%;
  background-color: #bce4ff;
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
  top: 30px;
  left: 70%;
  z-index: 1;
  overflow: hidden;

  &:before {
    content: "";
    display: block;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: #000;
    z-index: 2;
  }
`;

const Window = styled.div`
  border-top: 20px solid rgba(230, 234, 237);
  border-radius: 4px 0 0 0;
  position: absolute;
  top: 10px;
  bottom: 0;
  right: 0;
  left: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Button = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  position: absolute;
  top: 16px;
  z-index: 1;
  cursor: pointer;
`;

const RedButton = styled(Button)`
  background-color: rgb(255, 55, 55);
  left: 20px;
`;

const YellowButton = styled(Button)`
  background-color: rgb(255, 193, 0);
  left: 32px;
`;

const GreenButton = styled(Button)`
  background-color: rgb(0, 208, 60);
  left: 44px;
`;

const Scrollable = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
`;

const ProjectContainer = styled.div`
  display: flex;
`;

const Projects = () => {
  return (
    <>
      <Camera />
      <Computer>
        <RedButton />
        <YellowButton />
        <GreenButton />
        <Window>
          <Scrollable>
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
                      Création de comptes, connexion, dépôt d'annonces, <br />
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
          </Scrollable>
        </Window>
      </Computer>
    </>
  );
};

export default Projects;
