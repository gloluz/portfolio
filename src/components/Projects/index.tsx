import React, { useState, useEffect } from "react";

import TypeForm from "../../assets/Pictures/typeform.jpg";
import Deliveroo from "../../assets/Pictures/deliveroo.jpg";
import Tripadvisor from "../../assets/Pictures/tripadvisor.jpg";
import LeBonCoin from "../../assets/Pictures/leboncoin.png";
import Project from "../Layout/Project";
import { ColumnProject, BoxedContainer } from "../Layout";
import {
  Computer,
  Camera,
  TopBar,
  RedButton,
  YellowButton,
  Screen,
  Window,
  GreenButton,
  Scrollable,
  ProjectContainer
} from "./styles";

const Projects = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [showPictures, setShowPictures] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowWindow(true), 400);
    const timeout2 = setTimeout(() => setShowPictures(true), 500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <BoxedContainer>
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
                        websiteUrl="https://replique-tripadvisor.netlify.com"
                        pictureSrc={Tripadvisor}
                        title="Réplique d'une page Tripadvisor"
                        subTitle="Intégration HTML/CSS uniquement"
                      />
                    </ColumnProject>

                    <ColumnProject>
                      <Project
                        websiteUrl="https://replique-leboncoin.netlify.com"
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
                        websiteUrl="https://replique-deliveroo.netlify.com"
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
    </BoxedContainer>
  );
};

export default Projects;
