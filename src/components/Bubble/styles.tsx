import styled, { keyframes } from "styled-components";
import { LeftRight } from ".";

interface BubbleStylesProps {
  position: LeftRight;
}

export const bubbleAppear = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const BubbleStyles = styled.div<BubbleStylesProps>`
  height: 200px;
  width: 350px;
  position: absolute;
  top: 25px;
  left: 80px;
  margin-bottom: 50px;
  z-index: 2;
  animation: 0.4s ${bubbleAppear} cubic-bezier(0.5, 0.9, 0.6, 1.5);

  &:after {
    content: "";
    height: 60px;
    width: 60px;
    position: absolute;
    left: 50%;
    bottom: -40px;
    z-index: 1;
    background: radial-gradient(
        50% 100% at 100% 0%,
        #bce4ff 100%,
        transparent 100%
      ),
      radial-gradient(100% 100% at 100% 0%, #fafafa 100%, transparent 100%);
  }

  &:before {
    content: "";
    border-radius: 50%;
    background-color: #fafafa;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
  padding: 20px 35px;
`;
