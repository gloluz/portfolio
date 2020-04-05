import styled, { keyframes, css } from "styled-components";
import { Overlay } from "../../components/Layout";

export const PictureTitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  line-height: 24px;
  text-transform: uppercase;
  color: #fff;
  transition: 0.3s all ease;
  margin-bottom: 20px;
  transform: translateY(200px);

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const PictureSubTite = styled.span`
  font-size: 18px;
  color: #fff;
  transition: 0.4s all ease;
  line-height: 22px;
  transform: translateY(200px);

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s all ease !important;

  @media screen and (max-width: 768px) {
    width: 615px;
    height: 385px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 228px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 0;
  overflow: hidden;
  margin-bottom: 10px;

  &:hover ${Overlay} {
    opacity: 1;
  }

  &:hover ${Picture} {
    transform: scale(1.1);
  }

  &:hover ${PictureTitle}, &:hover ${PictureSubTite} {
    transform: translateY(0);
  }
`;

export const computerAnimation = keyframes`
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translate(0);
  }
`;

export const Computer = styled.div`
  display: flex;
  height: calc(100vh - 130px);
  animation: ${computerAnimation} ease 0.4s;
  position: relative;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 74px);
  }
`;

export const Screen = styled.div`
  border: 15px solid black;
  border-right-width: 15px;
  border-left-width: 15px;
  border-top-width: 40px;
  border-bottom: none;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  box-shadow: 0 0 0 6px #d9d9d9;
  position: relative;
  width: 100%;
  background-color: #f4f4f4;

  @media screen and (max-width: 768px) {
    border-right-width: 0;
    border-left-width: 0;
    border-radius: 0;
  }
`;

export const Camera = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #333;
  position: absolute;
  top: 10px;
  left: 50%;
  z-index: 1;
  overflow: hidden;

  &:before {
    content: "";
    display: block;
    box-sizing: border-box;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: linear-gradient(30deg, rgba(255, 255, 255, 0.4) 25%, #000 25%);
    border: 2px solid #111;
    z-index: 2;
  }
`;

interface WindowProps {
  showWindow: boolean;
}

export const Window = styled.div<WindowProps>`
  overflow: hidden;
  border-radius: 4px 0 0 0;
  position: absolute;
  top: 10px;
  bottom: 0;
  right: 0;
  left: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s all ease;
  transform-origin: right bottom;
  transform: scale(0);

  ${({ showWindow }) =>
    showWindow &&
    css`
      transform: scale(1);
    `}
`;

export const TopBar = styled.div`
  height: 20px;
  width: 100%;
  background: rgba(230, 234, 237);
  display: flex;
  padding-left: 5px;
`;

export const Button = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-top: 6px;
  margin-left: 5px;
  cursor: pointer;
`;

export const RedButton = styled(Button)`
  background-color: rgb(255, 55, 55);
`;

export const YellowButton = styled(Button)`
  background-color: rgb(255, 193, 0);
`;

export const GreenButton = styled(Button)`
  background-color: rgb(0, 208, 60);
`;

export const Scrollable = styled.div`
  position: absolute;
  top: 20px;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  padding: 10px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
