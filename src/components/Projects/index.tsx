import React from "react";
import {
  Title,
  Column,
  Paragraph,
  SubTitle,
  Container,
  Picture,
  Link
} from "../Layout";
import Flex from "../Layout/Flex";
import TypeForm from "../../assets/Pictures/typeform.png";
import Deliveroo from "../../assets/Pictures/deliveroo.png";
import Tripadvisor from "../../assets/Pictures/tripadvisor.png";
import Marvel from "../../assets/Pictures/marvel.png";
import LeBonCoin from "../../assets/Pictures/leboncoin.png";

const Projects = () => {
  return (
    <>
      <Title>Projets</Title>

      <Container>
        <Flex direction="row" wrap="wrap">
          <Column>
            <Flex direction="column" align="center">
              <div>
                <Picture src={TypeForm} alt="capture écran de mon site" />
              </div>
              <div>
                <SubTitle>Formulaires</SubTitle>
                <Paragraph>
                  Dans ce projet vous pouvez créer des formulaires d'avis.
                  <Link href="https://typeform-certif.netlify.com">
                    {" "}
                    Cliquez ici pour découvrir ce projet
                  </Link>
                </Paragraph>
              </div>
            </Flex>
          </Column>

          <Column>
            <Flex direction="column" align="center">
              <Picture src={Tripadvisor} alt="capture écran de mon site" />
              <SubTitle>Réplique de Tripadvisor</SubTitle>
              <Paragraph>
                Réplique d'une page de Tripadvisor fait en HTML/CSS avec le
                responsive design inclus.
                <Link href="https://boring-bardeen-4d94ae.netlify.com">
                  {" "}
                  Cliquez ici pour découvrir ce projet
                </Link>
              </Paragraph>
            </Flex>
          </Column>

          <Column>
            <Flex direction="column" align="center">
              <Picture src={Deliveroo} alt="capture écran de mon site" />
              <SubTitle>Réplique de Deliveroo</SubTitle>
              <Paragraph>
                Réplique d'une page de Deliveroo. Sur ce projet vous pouvez
                ajouter des plats à votre panier, augmenter la quantité, la
                diminuer, ainsi que supprimer le plat. Le paiement n'est pas
                inclus dans ce projet.
                <Link href="https://dazzling-raman-a7be69.netlify.com">
                  {" "}
                  Cliquez ici pour découvrir ce projet
                </Link>
              </Paragraph>
            </Flex>
          </Column>

          <Column>
            <Flex direction="column" align="center">
              <Picture src={LeBonCoin} alt="capture écran de mon site" />
              <SubTitle>Réplique de LeBonCoin</SubTitle>
              <Paragraph>
                Réplique du site de LeBonCoin. Sur ce projets vous pouvez créer
                un compte, vous connecter, déconnecter. Ajouter des annonces,
                consulter les annonces en cours. Le paiement est inclus dans ce
                site.
                <Link href="https://amazing-aryabhata-c805ca.netlify.com">
                  {" "}
                  Cliquez ici pour découvrir ce projet
                </Link>
              </Paragraph>
            </Flex>
          </Column>

          <Column>
            <Flex direction="column" align="center">
              <Picture src={Marvel} alt="capture écran de mon site" />
              <SubTitle>Réplique Marvel</SubTitle>
              <Paragraph>
                Ce projet fait appel à l'api Marvel. Il a été réalisé sans
                maquette.
                <Link href="https://sad-pare-6b708d.netlify.com">
                  {" "}
                  Cliquez ici pour découvrir ce projet
                </Link>
              </Paragraph>
            </Flex>
          </Column>
        </Flex>
      </Container>
    </>
  );
};

export default Projects;
