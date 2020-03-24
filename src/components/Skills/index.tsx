import React from "react";
import { Title, Container, Column } from "../Layout";
import styled from "styled-components";
import Icon from "../Icon";

const IconStyled = styled(Icon)`
  margin: 30px 20px 30px 70px;
`;

const ParagraphSkills = styled.p`
  color: #4f4f4f;
  font-size: 20px;
  line-height: 40px;
  font-weight: 400;
`;

const ColumnParagraph = styled.div`
  width: 50%;
  margin: 0 20px;
  display: flex;
  align-items: center;
`;

const blue = "#82bae0";

const Skills = () => {
  return (
    <>
      <Title>Compétences</Title>

      <Container>
        <Column>
          <IconStyled color={blue} size={80} icon="html-five" />
          <IconStyled color={blue} size={80} icon="css3" />
          <IconStyled color={blue} size={80} icon="react" />
          <IconStyled color={blue} size={80} icon="javascript" />
          <IconStyled color={blue} size={80} icon="node-dot-js" />
          <IconStyled color={blue} size={80} icon="mongodb" />
        </Column>

        <ColumnParagraph>
          <ParagraphSkills>
            Durant ma formation j'ai pu acquérir des compétences sur différentes
            technos telles que: React, React Native, Javacscript, HTML/CSS,
            Node.JS, Express, MongoDB. J'ai ainsi pu réaliser plusieurs projets.
          </ParagraphSkills>
        </ColumnParagraph>
      </Container>
    </>
  );
};

export default Skills;
