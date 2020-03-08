import React, { useState, useEffect } from "react";
import Bubble, { LeftRight } from "../Bubble";
import styled, { keyframes } from "styled-components";

export interface ScrollingTextBubbleProps {
  scrollingTexts: string[];
  position: LeftRight;
}

const arrowMove = keyframes`
  0% {
    bottom: 15px;
  }
  50% {
    bottom: 10px;
  }
  100% {
    bottom: 15px;
  }
`;

const ArrowBottom = styled.div`
  border: 10px solid transparent;
  border-top-color: #000;
  height: 0;
  width: 0;
  margin-top: 10px;
`;

const ButtonArrow = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 15px;
  height: 40px;
  width: 40px;
  animation: 0.5s ${arrowMove} ease infinite;
  background: none;
  border: none;
`;

const ScrollingTextBubble = ({
  scrollingTexts,
  position
}: ScrollingTextBubbleProps) => {
  const [nbLettersDisplayed, setNbLettersDisplayed] = useState(1);
  const [currentText, setCurrentText] = useState(0);

  const handleChangeText = () => {
    if (currentText < scrollingTexts.length - 1) {
      setCurrentText(currentText + 1);
      setNbLettersDisplayed(1);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (scrollingTexts[currentText].length > nbLettersDisplayed) {
        setNbLettersDisplayed(nbLettersDisplayed + 1);
      }
    }, 50);

    return () => {
      clearTimeout(timeout);
    };
  }, [nbLettersDisplayed]);

  const showArrow =
    scrollingTexts[currentText].length <= nbLettersDisplayed &&
    currentText < scrollingTexts.length - 1;

  return (
    <Bubble position={position}>
      {scrollingTexts[currentText].substring(0, nbLettersDisplayed)}

      {showArrow && (
        <ButtonArrow onClick={handleChangeText}>
          <ArrowBottom />
        </ButtonArrow>
      )}
    </Bubble>
  );
};

export default ScrollingTextBubble;
