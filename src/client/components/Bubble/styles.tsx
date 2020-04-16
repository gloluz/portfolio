import styled, { keyframes } from "styled-components";
import { LeftRight } from ".";
import { MEDIA } from "../../constant";

interface BubbleStylesProps {
  position: LeftRight;
  isOn: boolean;
  bgColor?: string;
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
  bottom: 420px;
  left: 80px;
  margin-bottom: 50px;
  z-index: 2;
  animation: 0.4s ${bubbleAppear} cubic-bezier(0.5, 0.9, 0.6, 1.5);
  transition: all 0.5s ease;

  ${MEDIA.MAX.m} {
    height: 150px;
    width: 280px;
    bottom: 380px;
  }

  ${MEDIA.MIN.l} {
    bottom: 500px;
  }

  ${MEDIA.MIN.xl} {
    bottom: 600px;
  }

  ${MEDIA.MAX.s} {
    bottom: 300px;
    left: 10px;
  }

  ${MEDIA.MAX.xxs} {
    height: 130px;
    width: 220px;
    bottom: 270px;
    left: 10px;
  }

  @media screen and (max-height: 675px) and (min-width: 480px) {
    display: none;
  }

  &:after {
    content: "";
    height: 60px;
    width: 60px;
    position: absolute;
    left: calc(50% - 30px);
    bottom: -40px;
    z-index: 1;
    background: radial-gradient(
        50% 100% at 100% 0%,
        ${({ bgColor }) => bgColor || "#bce4ff"} 99%,
        transparent 99%
      ),
      radial-gradient(100% 100% at 100% 0%, #fafafa 99%, transparent 99%);

    ${MEDIA.MAX.xxs} {
      transform: scale(0.5);
    }
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

  ${MEDIA.MAX.m} {
    font-size: 14px;
  }

  ${MEDIA.MAX.xxs} {
    font-size: 12px;
  }
`;
