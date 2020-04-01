import React, { useEffect, useState } from "react";

import { ItemMenu } from "../Menu";
import { PostItContainer } from "../Layout";
import IconSkills from "../Layout/IconSkills";
import styled, { keyframes, css } from "styled-components";

export const deskAnimation = keyframes`
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translate(0);
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #d08a0c;
  width: 100%;
  height: 600px;
  animation: ${deskAnimation} ease 0.4s;
  position: relative;
`;

const bodyPen = `linear-gradient(transparent 75%, #d9d9d9 75%,#d9d9d9 97%, blue 97%),
linear-gradient(90deg, #d9d9d9 30%, black 32%,black 60%, #d9d9d9 62%)

`;

interface PenProps {
  show: boolean;
}

const Pen = styled.div<PenProps>`
  height: 400px;
  width: 35px;
  background: ${bodyPen};
  position: absolute;
  top: 20%;
  right: 10%;
  transform: translate(100vw);
  transition: 0.3s all ease;
  z-index: 1;

  ${({ show }) =>
    show &&
    css`
      transform: translate(0) rotate(-80deg);
    `}

  &:before {
    content: "";
    display: block;
    height: 150px;
    background-color: blue;
    border-radius: 100% 100% 0 0;
    position: absolute;
    top: -100px;
    left: -10px;
    right: -5px;
  }

  &:after {
    content: "";
    display: block;
    height: 100px;
    width: 10px;
    background-color: blue;
    position: absolute;
    top: 40px;
    left: -10px;
  }
`;

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
  const [showPen, SetShowPen] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTab === "skills") {
      setIcon1(true);
    } else {
      setIcon1(false);
    }

    const timeout1 = setTimeout(() => setIcon2(true), 500);
    const timeout2 = setTimeout(() => setIcon3(true), 700);
    const timeout3 = setTimeout(() => setIcon4(true), 900);
    const timeout4 = setTimeout(() => setIcon5(true), 1100);
    const timeout5 = setTimeout(() => setIcon6(true), 1300);
    const timeout6 = setTimeout(() => SetShowPen(true), 1500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
    };
  }, [selectedTab]);

  return (
    <SkillsContainer>
      <Pen show={showPen} />
      <PostItContainer>
        <IconSkills
          backgroundColor="yellow"
          show={icon1}
          icon="javascript"
          skillTitle="Javascript"
          rotate={-30}
        />
        <IconSkills
          backgroundColor="#D2F7A6"
          show={icon2}
          icon="html-five"
          skillTitle="HTML"
          rotate={-10}
        />
        <IconSkills
          backgroundColor="yellow"
          show={icon3}
          icon="css3"
          skillTitle="CSS"
          rotate={10}
        />
        <IconSkills
          backgroundColor="#EF8533"
          show={icon4}
          icon="mongodb"
          skillTitle="MongoDB"
          rotate={-40}
        />
        <IconSkills
          backgroundColor="#43A6DD"
          show={icon5}
          icon="node-dot-js"
          skillTitle="Node JS"
          rotate={-5}
        />
        <IconSkills
          backgroundColor="pink"
          show={icon6}
          icon="react"
          skillTitle="React / React Native"
          rotate={40}
        />
      </PostItContainer>
    </SkillsContainer>
  );
};

export default Skills;
