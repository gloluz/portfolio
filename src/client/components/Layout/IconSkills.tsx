import React from "react";
import styled, { css } from "styled-components";
import { MEDIA } from "../../constant";
import Icon from '../Icon'

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

  ${MEDIA.MAX.xs} {
    width: 150px;
    height: 150px;
    margin: 0;

    svg {
      max-height: 70px;
      max-width: 70px;
    }
  }

  ${MEDIA.MAX.xxs} {
    width: 120px;
    height: 120px;

    svg {
      max-height: 40px;
      max-width: 40px;
    }
  }

  &:nth-child(3n) {
    margin-top: 20px;

    ${MEDIA.MAX.xxs} {
      margin-top: 10px;
    }
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

  ${MEDIA.MAX.xs} {
    font-size: 16px;
  }

  ${MEDIA.MAX.xxs} {
    margin: 12px 0 0 0;
  }
`;

interface IconSkillsProps {
  show: boolean;
  backgroundColor: string;
  size?: string;
  icon: 'javascript' | 'gatsby' | 'github' | 'html' | 'linkedin' | 'nodejs' | 'react' | 'typescript';
  skillTitle: string;
  rotate: number;
}

const IconSkills = ({
  backgroundColor,
  show,
  icon,
  size = '100px',
  skillTitle,
  rotate,
}: IconSkillsProps) => {
  return (
    <PostItSkill backgroundColor={backgroundColor} show={show} rotate={rotate}>
      <Icon icon={icon} size={size}/>
      <TextSkill>{skillTitle}</TextSkill>
    </PostItSkill>
  );
};

export default IconSkills;
