import styled, { keyframes, css } from "styled-components";
import { MEDIA } from "../../constant";

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
  height: calc(100vh - 130px);
  animation: ${deskAnimation} ease 0.4s;
  position: relative;
  overflow: auto;

  ${MEDIA.MAX.s} {
    height: calc(100vh - 20px);
    padding: 12px;
  }

  ${MEDIA.MAX.xs} {
    height: calc(100vh - 20px);
  }
`;

const bodyPen = `linear-gradient(transparent 75%, #d9d9d9 75%,#d9d9d9 97%, blue 97%),
linear-gradient(90deg, #d9d9d9 30%, black 32%,black 60%, #d9d9d9 62%)

`;

interface PenProps {
  show: boolean;
}

export const Pen = styled.div<PenProps>`
  height: 400px;
  width: 35px;
  background: ${bodyPen};
  position: absolute;
  top: 20%;
  right: 10%;
  transform: translate(100vw);
  transition: 0.3s all ease;
  z-index: 1;

  ${MEDIA.MAX.s} {
    display: none;
  }

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
