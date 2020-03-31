import React, { useEffect, useState } from "react";
import { Column } from "../Layout";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import Flex from "../Layout/Flex";
import { ItemMenu } from "../Menu";

interface IconStyledProps {
  show: boolean;
}

const IconStyled = styled(Icon)<IconStyledProps>`
  margin: 30px 20px 30px 70px;
  transform: translate(100vw);
  transition: 0.4s all ease;

  ${({ show }) =>
    show &&
    css`
      transform: translate(0);
    `}
`;

const blue = "#82bae0";

interface SkillsProps {
  selectedTab: ItemMenu;
}

const Skills = ({ selectedTab }: SkillsProps) => {
  const [icon1, setIcon1] = useState<boolean>(false);
  const [icon2, setIcon2] = useState<boolean>(false);
  const [icon3, setIcon3] = useState<boolean>(false);
  const [icon4, setIcon4] = useState<boolean>(false);
  const [icon5, setIcon5] = useState<boolean>(false);
  const [icon6, setIcon6] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTab === "skills") {
      setIcon1(true);
    } else {
      setIcon1(false);
    }

    const timeout1 = setTimeout(() => setIcon2(true), 200);
    const timeout2 = setTimeout(() => setIcon3(true), 400);
    const timeout3 = setTimeout(() => setIcon4(true), 600);
    const timeout4 = setTimeout(() => setIcon5(true), 800);
    const timeout5 = setTimeout(() => setIcon6(true), 1000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
    };
  }, [selectedTab]);

  return (
    <Flex direction="row" justify="center" align="center" flex="1">
      <Column>
        <IconStyled show={icon1} color={blue} size={80} icon="html-five" />
        <IconStyled show={icon2} color={blue} size={80} icon="css3" />
        <IconStyled show={icon3} color={blue} size={80} icon="react" />
        <IconStyled show={icon4} color={blue} size={80} icon="javascript" />
        <IconStyled show={icon5} color={blue} size={80} icon="node-dot-js" />
        <IconStyled show={icon6} color={blue} size={80} icon="mongodb" />
      </Column>
    </Flex>
  );
};

export default Skills;
