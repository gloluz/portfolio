import styled, { css, keyframes } from "styled-components";
import { MEDIA } from "../../constant";

export const BurgerMenuContainer = styled.div`
  display: none;
  position: relative;
  justify-content: flex-end;
  padding: 20px;
  height: 90px;
  z-index: 101;

  ${MEDIA.MAX.s} {
    display: flex;
    height: 54px;
    padding: 12px;
    width: 50px;
    position: fixed;
    right: 0;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: transparent;
  outline: none;
  cursor: pointer;
  padding: 10px;
`;

export const overlayAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const OverlayMenu = styled.div`
  background: rgba(188, 228, 255, 1);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: ${overlayAnimation} ease 0.4s;
`;

interface LogoBurgerMenuProps {
  show: boolean;
}

export const LogoBurgerMenu = styled.div<LogoBurgerMenuProps>`
  height: 4px;
  width: 40px;
  background-color: ${({ show }) => (show ? "transparent" : "#fff")};
  position: relative;
  margin: 14px 0;
  transition: 0.3s all ease;

  &:before {
    content: "";
    display: block;
    height: 4px;
    background-color: #fff;
    position: absolute;
    top: -14px;
    right: 0;
    left: 0;
    transition: 0.3s all ease;
    transform-origin: left;

    ${({ show }) =>
      show &&
      css`
        transform: rotate(45deg);
      `}
  }

  &:after {
    content: "";
    display: block;
    height: 4px;
    background-color: #fff;
    position: absolute;
    top: 14px;
    right: 0;
    left: 0;
    transition: 0.3s all ease;
    transform-origin: left;

    ${({ show }) =>
      show &&
      css`
        transform: rotate(-45deg);
      `}
  }
`;
