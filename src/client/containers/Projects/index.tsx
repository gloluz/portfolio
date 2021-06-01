import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import TypeForm from "../../assets/Pictures/typeform.jpg";
import Deliveroo from "../../assets/Pictures/deliveroo.jpg";
import Tripadvisor from "../../assets/Pictures/tripadvisor.jpg";
import LeBonCoin from "../../assets/Pictures/leboncoin.png";
import Epycure from  "../../assets/Pictures/epycure.png";
import Project from "./Project";
import { ColumnProject, BoxedContainer } from "../../components/Layout";
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
  ProjectContainer,
} from "./styles";
import { SITE_TITLE } from "../../constant";

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
      <Helmet>
        <title>Projets - {SITE_TITLE}</title>
        <meta name="description" content="Découvrez les différents projets de Gloria Luzio, de l'intégration au développement web/mobile." />

        <meta
          property="og:title"
          content="Projets | Gloria Luzio - développeuse Javascript React - Paris"
        />
        <meta
          property="og:description"
          content="Découvrez les différents projets de Gloria Luzio, de l'intégration au développement web/mobile."
        />
        <meta property="og:url" content="https://www.glorialuzio.fr/projets" />
      </Helmet>

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
                        websiteUrl="https://epycure.com"
                        pictureSrc={Epycure}
                        title="Site e-commerce"
                        subTitle="Refonte du site en React/ TypeScript/ Gatsby"
                      />
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
