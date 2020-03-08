import React from "react";
import { Title, Container, Column, Paragraph } from "../Layout";

const Projects = () => {
  return (
    <>
      <Title>Projets</Title>

      <Container>
        <Column>
          <Paragraph>Réplique de Tripadvisor</Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            itaque odio laudantium sequi, temporibus dolores suscipit aut iusto
            odit quidem omnis eligendi, quos a commodi possimus velit fugit
            accusantium amet?
          </Paragraph>
        </Column>

        <Column>
          <Paragraph>Réplique de Deliveroo</Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            itaque odio laudantium sequi, temporibus dolores suscipit aut iusto
            odit quidem omnis eligendi, quos a commodi possimus velit fugit
            accusantium amet?
          </Paragraph>
        </Column>
      </Container>

      <Container>
        <Column>
          <Paragraph>Réplique de LeBonCoin</Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            itaque odio laudantium sequi, temporibus dolores suscipit aut iusto
            odit quidem omnis eligendi, quos a commodi possimus velit fugit
            accusantium amet?
          </Paragraph>
        </Column>

        <Column>
          <Paragraph>Site Marvel à partir d'une API</Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            itaque odio laudantium sequi, temporibus dolores suscipit aut iusto
            odit quidem omnis eligendi, quos a commodi possimus velit fugit
            accusantium amet?
          </Paragraph>
        </Column>
      </Container>
    </>
  );
};

export default Projects;
