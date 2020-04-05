import React, { useEffect, useState } from "react";

import { PostItContainer } from "../Layout";
import { SkillsContainer, Pen } from "./styles";
import IconSkills from "../Layout/IconSkills";

const Skills = () => {
  const [icon1, setIcon1] = useState<boolean>(false);
  const [icon2, setIcon2] = useState<boolean>(false);
  const [icon3, setIcon3] = useState<boolean>(false);
  const [icon4, setIcon4] = useState<boolean>(false);
  const [icon5, setIcon5] = useState<boolean>(false);
  const [icon6, setIcon6] = useState<boolean>(false);
  const [showPen, SetShowPen] = useState<boolean>(false);

  useEffect(() => {
    setIcon1(true);

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
  }, []);

  return (
    <SkillsContainer>
      <Pen show={showPen} />
      <PostItContainer>
        <IconSkills
          backgroundColor="yellow"
          show={icon1}
          icon="javascript"
          skillTitle="Javascript"
          rotate={-10}
        />
        <IconSkills
          backgroundColor="#D2F7A6"
          show={icon2}
          icon="html5"
          skillTitle="HTML"
          rotate={1}
        />
        <IconSkills
          backgroundColor="yellow"
          show={icon3}
          icon="css3"
          skillTitle="CSS"
          rotate={6}
        />
        <IconSkills
          backgroundColor="#EF8533"
          show={icon4}
          icon="mongodb"
          skillTitle="MongoDB"
          rotate={3}
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
          rotate={10}
        />
      </PostItContainer>
    </SkillsContainer>
  );
};

export default Skills;
