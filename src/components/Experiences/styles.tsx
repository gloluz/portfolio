import styled, { keyframes } from "styled-components";

export const blackboardAnimation = keyframes`
  0% {
    transform: translate(100vw);
  }
  100% {
    transform: translate(0);
  }
`;

export const BlackBoard = styled.div`
  position: relative;
  background-color: #16160a;
  margin-bottom: 20px;
  border: 40px solid #f3a433;
  border-radius: 10px;
  position: relative;
  animation: ${blackboardAnimation} 0.4s ease;
`;

export const Pin = styled.div`
  height: 50px;
  width: 50px;
  z-index: 3;
  position: absolute;
  top: -40px;
  left: calc(30% - 62px);
  background: radial-gradient(
      30px 30px at 15px 15px,
      #e43d34 38%,
      transparent 40%
    ),
    radial-gradient(20px 20px at 28px 20px, #e43d34 38%, transparent 40%),
    linear-gradient(25deg, transparent 42%, grey 45%, grey 55%, transparent 58%)
      no-repeat 30px 18px / 15px 15px;
`;

export const ExperienceStyled = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 60px;
  position: relative;
`;

interface EducationTitleProps {
  rotate: number;
}

export const ExperienceTitle = styled.h2<EducationTitleProps>`
  color: #82bae0;
  font-size: 22px;
  line-height: 36px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  width: 45%;
  margin: 0 140px;
  background-color: #fff;
  padding: 40px 30px;
  transition: 0.2s all ease;
  transform-origin: top;
  transform: rotate(${({ rotate }) => rotate}deg);
  position: relative;
  z-index: 1;
`;

export const ExperienceResume = styled.p`
  color: #fff;
  font-size: 26px;
  font-weight: 100;
  width: 50%;
  margin: 20px 40px 0 40px;
  padding: 20px;
  font-family: "Vibur", cursive;
`;

export const HorizontalBorder = styled.div`
  width: 6px;
  height: 110%;
  background: linear-gradient(45deg, #e87f79 28%, transparent 28%) 10px 10px /
      10px 10px,
    linear-gradient(45deg, transparent 50%, #e87f79 50%) 10px 10px / 10px 10px,
    #dc119d;
  position: absolute;
  top: -25px;
  bottom: 0;
  left: calc(30% - 20px);
`;
