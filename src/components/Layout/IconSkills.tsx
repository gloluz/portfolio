import React from "react";
import styled, { css } from "styled-components";
import Icon from "../Icon";

interface PostItSkillProps {
  show: boolean;
  backgroundColor: string;
  rotate: number;
}

const PostItSkill = styled.div<PostItSkillProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -10px -10px -20px -10px;
  width: 250px;
  height: 250px;
  transform: translate(100vw);
  transition: 0.4s all ease;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  transform-origin: right;

  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
    margin: 0;
  }

  &:nth-child(3n) {
    margin-top: 20px;
  }

  &:last-child &:nth-child(4n) {
    margin-right: 0;
  }

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `};

  ${({ show, rotate }) =>
    show &&
    rotate &&
    css`
      transform: translate(0) rotate(${rotate}deg);
    `};
`;

const TextSkill = styled.p`
  color: #124275;
  font-family: "Vibur", cursive;
  font-size: 24px;
  letter-spacing: 2px;
  text-align: center;
  margin: 20px 0 0 0;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

interface IconSkillsProps {
  show: boolean;
  backgroundColor: string;
  icon: string;
  skillTitle: string;
  rotate: number;
}

const IconSkills = ({
  backgroundColor,
  show,
  icon,
  skillTitle,
  rotate
}: IconSkillsProps) => {
  return (
    <PostItSkill backgroundColor={backgroundColor} show={show} rotate={rotate}>
      <Icon color="#124275" size={100} icon={icon} />
      <TextSkill>{skillTitle}</TextSkill>
    </PostItSkill>
  );
};

export default IconSkills;
