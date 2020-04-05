import styled from "styled-components";
import { overlayAnimation } from "../Menu/styles";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 105;
  animation: ${overlayAnimation} ease 0.4s;
`;

export const ModalContainer = styled.div`
  max-width: calc(100% - 24px);
  max-height: calc(100% - 24px);
  height: 400px;
  width: 400px;
  border-radius: 5px;
  background-color: #fff;
  padding: 40px;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 20px;
  position: relative;
`;

export const ArrowContent = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 5px;
  padding: 20px;

  &:hover {
    &:before,
    &:after {
      background: grey;
    }
  }

  &:before {
    content: "";
    display: block;
    height: 20px;
    width: 2px;
    background: black;
    transform: rotate(45deg);
    transition: 0.3s all ease;
  }

  &:after {
    content: "";
    display: block;
    height: 20px;
    width: 2px;
    background: black;
    transform: rotate(-45deg);
    position: absolute;
    top: 20px;
    right: 20px;
    transition: 0.3s all ease;
  }
`;
