import React from "react";
import {
  Title,
  Container,
  Picture,
  Link,
  ColumnSkills,
  Overlay
} from "../Layout";

import TypeForm from "../../assets/Pictures/typeform.png";
import Deliveroo from "../../assets/Pictures/deliveroo.png";
import Tripadvisor from "../../assets/Pictures/tripadvisor.png";
import LeBonCoin from "../../assets/Pictures/leboncoin.png";
import Flex from "../Layout/Flex";
import Project from "../Layout/Project";

const Projects = () => {
  return (
    <>
      <Title>Projets</Title>

      <Container>
        <Flex direction="row" justify="space-between" flex="1">
          <ColumnSkills>
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
          </ColumnSkills>

          <ColumnSkills>
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
          </ColumnSkills>
        </Flex>
      </Container>
    </>
  );
};

export default Projects;
