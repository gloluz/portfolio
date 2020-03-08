import React from "react";
import styled from "styled-components";

const o = "orange";
const darkOrange = "#e2970e";
const darkOrange2 = "#d08a0c";
const t = "transparent";
const r = "red";
const be = "#ffe0b3";
const be2 = "#fbd7a3";
const grey = "#d9d9d9";
const darkGrey = "#b7b7b7";
const grey2 = "#444444";
const black = "black";
const white = "#fff";
const green = "#5ee65e";
const green2 = "#0d8c0d";
const pink = "#fa8072";
const brown = "#f4a460";

const topDesk = `
  linear-gradient(to bottom, ${t} 44%, ${darkOrange} 44%, ${darkOrange} 49%, ${t} 49%),
  linear-gradient(-51deg,${o} 90%, ${t} 10%) 0 0 / 100% 44%

`;

const footDesk = `
  linear-gradient(to bottom, ${t} 44%, ${darkOrange} 44%) 0 100% / 2% 100%,
  linear-gradient(to bottom, ${t} 44%, ${darkOrange2} 44%) 0 100% / 11% 100%
`;

const topLaptop = `
linear-gradient(${white} 80%, ${t} 0) 50% 17% / 65% 60%,
linear-gradient(black 80%,transparent 0) 50% 2% / 65% 7%, //border top black screen
linear-gradient(${black} 80%,transparent 0) 50% 19% / 72% 68%, // black screen
radial-gradient(3em 3em at 82.6% 6.7%,${black} 39%,transparent 40%), // round top right 
radial-gradient(3em 3em at 17.4% 6.7%,black 39%,transparent 40%), // round top left
linear-gradient(${grey} 80%,transparent 0) 50% -1.4% / 68% 5.5%, //border top
radial-gradient(3em 3em at 16% 4.5%,${grey} 37%,transparent 40%), // round top left
radial-gradient(3em 3em at 84.2% 4.5%,${grey} 37%,transparent 40%), // round top right
linear-gradient(${grey} 80%,transparent 0) 50% 23% / 75% 79%
`;

const bottomLaptop = `
  radial-gradient(1.1em 1.1em at 95.5% 91%,${grey} 36%,transparent 40%), // round bottom right
  radial-gradient(1.1em 1.1em at 4.5% 91%,${grey} 36%,transparent 40%), // round bottom left
  linear-gradient(${grey} 89%,transparent 0) 50% 92.6% / 91% 2.5%, //border bottom
  radial-gradient(1.1em 1.1em at 95.8% 93%,${darkGrey} 36%,transparent 40%),
  radial-gradient(1.1em 1.1em at 4.3% 93%,${darkGrey} 36%,transparent 40%),
  linear-gradient(${darkGrey} 89%,transparent 0) 50% 94.6% / 91% 2.5%,
 
  linear-gradient(${grey2},${grey2}) 50.5% 64% / 59.5% 2%, //border top keyboard
  linear-gradient(black,black) 50% 74% / 60% 13%, //main keyboard
  linear-gradient(64deg,${black} 10%,transparent 0%) 121% 54% / 34% 50%, //right side keyboard
  linear-gradient(-64deg,${black} 10%,transparent 0%) -17% 54% / 32% 50%, //left side keyboard
  
  linear-gradient(64deg,${grey} 21%,${t} 0%) 127% 81% / 32% 50%, 
  linear-gradient(-64deg,${grey} 21%,${t} 0%) -27% 81% / 32% 50%,
  linear-gradient(${grey},${grey}) 50% 87% / 73% 27%

`;

const pot = `
  radial-gradient(12em 3em at calc(50%) calc(50% + 6.5em), ${be2} 38%, transparent 40%), // round top pot
  radial-gradient(12em 3em at calc(50%) calc(50% + 13em), ${be} 38%, transparent 40%),// round bottom pot
  linear-gradient(${be},${be}) 50% 91% / 47% 21% // main pot
`;

const cactus = `
  radial-gradient(0.5em 0.5em at calc(50%) calc(50% + 0em), ${white} 38%, transparent 40%),
  radial-gradient(0.5em 0.5em at calc(60%) calc(50% + 1em), ${white} 38%, transparent 40%),
  radial-gradient(0.5em 0.5em at calc(40%) calc(50% + 1em), ${white} 38%, transparent 40%),
  radial-gradient(0.5em 0.5em at calc(57%) calc(50% + 3em), ${white} 38%, transparent 40%),
  radial-gradient(0.5em 0.5em at calc(43%) calc(50% + 4em), ${white} 38%, transparent 40%),
  radial-gradient(0.5em 0.5em at calc(48%) calc(50% + 2em), ${white} 38%, transparent 40%),
  radial-gradient(0.5em 0.5em at calc(54%) calc(50% + 5em), ${white} 38%, transparent 40%),
  radial-gradient(0.5em 0.5em at calc(50%) calc(50% + 6.5em), ${white} 38%, transparent 40%),
  radial-gradient(9em 12em at calc(50%) calc(50% + 2.5em),${green} 38%,transparent 40%),
  radial-gradient(3em 4em at calc(50%) calc(50% + -2.5em),${pink} 38%,transparent 40%),
  radial-gradient(11em 2em at calc(50%) calc(50% + 6.9em),${brown} 38%,transparent 40%)
`;

const DeskStyle = styled.div`
  background: ${topDesk}, ${footDesk};
  background-repeat: no-repeat;
  font-size: 10px;
  height: 25em;
  width: 80em;
  position: absolute;
  bottom: 0;
  right: 0;
  transform-origin: bottom right;

  @media screen and (max-height: 720px) {
    transform: scale(0.5);
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.5);
  }
`;

const Laptop = styled.div`
  background: ${bottomLaptop}, ${topLaptop};
  background-repeat: no-repeat;
  font-size: 10px;
  height: 25em;
  width: 35em;
  position: absolute;
  bottom: 16em;
  right: 30em;
  perspective: 50em;

  &:before {
    content: " ";
    width: 8em;
    height: 6.5em;
    border-radius: 6px;
    background-color: #c7c7c7;
    position: absolute;
    bottom: 0.6em;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: rotateX(70deg);
  }
`;

const Cactus = styled.div`
  background: ${cactus}, ${pot};
  background-repeat: no-repeat;
  width: 20em;
  height: 30em;

  position: absolute;
  right: 6em;
  bottom: 22em;
`;

const Desk = () => {
  return (
    <DeskStyle>
      <Laptop />
      <Cactus />
    </DeskStyle>
  );
};

export default Desk;
