import React from "react";
import styled, { css } from "styled-components";
import Icon from "../Icon";

const IconStyled = styled(Icon)`
  margin: 30px 20px 30px 70px;
`;

interface PostItSkillProps {
  show: boolean;
  backgroundColor: string;
}

const PostItSkill = styled.div<PostItSkillProps>`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 300px;
  margin-right: 40px;
  margin-bottom: 40px;
  transform: translate(100vw);
  transition: 0.4s all ease;
  background-color: #fff;

  &:last-child {
    margin-right: 0;
  }

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `};

  ${({ show }) =>
    show &&
    css`
      transform: translate(0);
    `};
`;

const TextSkill = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
`;

interface IconSkillsProps {
  show: boolean;
  backgroundColor: string;
  icon: string;
  skillTitle: string;
}

const IconSkills = ({
  backgroundColor,
  show,
  icon,
  skillTitle
}: IconSkillsProps) => {
  return (
    <PostItSkill backgroundColor={backgroundColor} show={show}>
      <IconStyled color="#fff" size={100} icon={icon} />
      <TextSkill>{skillTitle}</TextSkill>
    </PostItSkill>
  );
};

export default IconSkills;
