import React from "react";
import { Title, Container, Picture, Link, ColumnSkills } from "../Layout";

import TypeForm from "../../assets/Pictures/typeform.png";
import Deliveroo from "../../assets/Pictures/deliveroo.png";
import Tripadvisor from "../../assets/Pictures/tripadvisor.png";
import Marvel from "../../assets/Pictures/marvel.png";
import LeBonCoin from "../../assets/Pictures/leboncoin.png";
import Flex from "../Layout/Flex";

const Projects = () => {
  return (
    <>
      <Title>Projets</Title>

      <Container>
        <Flex direction="row" justify="space-between" flex="1">
          <ColumnSkills>
            <Link href="https://typeform-certif.netlify.com">
              <Picture src={TypeForm} alt="capture écran de mon site" />
            </Link>

            <Link href="https://boring-bardeen-4d94ae.netlify.com">
              <Picture src={Tripadvisor} alt="capture écran de mon site" />
            </Link>
          </ColumnSkills>

          <ColumnSkills>
            <Link href="https://amazing-aryabhata-c805ca.netlify.com">
              <Picture src={LeBonCoin} alt="capture écran de mon site" />
            </Link>

            <Link href="https://dazzling-raman-a7be69.netlify.com">
              <Picture src={Deliveroo} alt="capture écran de mon site" />
            </Link>
          </ColumnSkills>
        </Flex>
      </Container>
    </>
  );
};

export default Projects;
