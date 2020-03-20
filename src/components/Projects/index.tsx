import React from "react";
import { Title, Container, Column, Paragraph } from "../Layout";

const Projects = () => {
  return (
    <>
      <Title>Projets</Title>

      <Container>
        <Column>
          <Paragraph>Gestionnaire de formulaires</Paragraph>
          <Paragraph>
            Dans ce projet vous pouvez créer des formulaires d'avis.
          </Paragraph>
        </Column>

        <Column>
          <Paragraph>Réplique de Tripadvisor</Paragraph>
          <Paragraph>
            Réplique d'une page de Tripadvisor fait en HTML/CSS avec le
            responsive design inclus. Cette page est visible via ce lien:
            https://boring-bardeen-4d94ae.netlify.com
          </Paragraph>
        </Column>

        <Column>
          <Paragraph>Réplique de Deliveroo</Paragraph>
          <Paragraph>
            Réplique d'une page de Deliveroo. Sur ce projet vous pouvez ajouter
            des plats à votre panier, augmenter la quantité, la diminuer, ainsi
            que supprimer le plat. Le paiement n'est pas inclus dans ce projet.
            Cette page est visible via ce lien :
            https://dazzling-raman-a7be69.netlify.com
          </Paragraph>
        </Column>
      </Container>

      <Container>
        <Column>
          <Paragraph>Réplique de LeBonCoin</Paragraph>
          <Paragraph>
            Réplique du site de LeBonCoin. Sur ce projets vous pouvez créer un
            compte, vous connecter, déconnecter. Ajouter des annonces, consulter
            les annonces en cours. Le paiement est inclus dans ce site. Ce
            projet est consultable via ce lien:
            https://amazing-aryabhata-c805ca.netlify.com
          </Paragraph>
        </Column>

        <Column>
          <Paragraph>Site Marvel à partir d'une API</Paragraph>
          <Paragraph>
            Ce projet fait appel à l'api Marvel. Il a été réalisé sans maquette.{" "}
          </Paragraph>
        </Column>
      </Container>
    </>
  );
};

export default Projects;
