import React, { useEffect, useState } from "react";

import { ItemMenu } from "../Menu";
import { SkillsContainer } from "../Layout";
import IconSkills from "../Layout/IconSkills";

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
    <SkillsContainer>
      <IconSkills
        backgroundColor="yellow"
        show={icon1}
        icon="html-five"
        skillTitle="html"
      />
      <IconSkills
        backgroundColor="pink"
        show={icon2}
        icon="css3"
        skillTitle="css"
      />
      <IconSkills
        backgroundColor="blue"
        show={icon3}
        icon="react"
        skillTitle="React/React Native"
      />
      <IconSkills
        backgroundColor="green"
        show={icon4}
        icon="javascript"
        skillTitle="Javascript"
      />
      <IconSkills
        backgroundColor="orange"
        show={icon5}
        icon="node-dot-js"
        skillTitle="Node Js"
      />
      <IconSkills
        backgroundColor="yellow"
        show={icon6}
        icon="mongodb"
        skillTitle="Mongo DB"
      />
    </SkillsContainer>
  );
};

export default Skills;
