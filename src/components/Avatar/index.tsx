import React from "react";
import styled from "styled-components";

const r = "#E32934";

const br = "#442525";
const b = "#000";
const t = "transparent";
const be = "#eacaad";
const w = "#ffffff";

const hair = `
  radial-gradient(28em 20em at 50% 14em, ${br} 50%, ${t} 50%) 50% -4em,
  linear-gradient(${br}, ${br}) 50% 9em / 24em 24em
`;

const curly = `
  radial-gradient(6em 6em at 50% 14em, ${br} 50%, ${t} 50%) -11.6em 4em,
  radial-gradient(6em 6em at 50% 14em, ${br} 50%, ${t} 50%) 11.6em 4em,
  radial-gradient(6em 6em at 50% 14em, ${br} 50%, ${t} 50%) -11.6em 10em,
  radial-gradient(6em 6em at 50% 14em, ${br} 50%, ${t} 50%) 11.6em 10em,
  radial-gradient(6em 6em at 50% 14em, ${br} 50%, ${t} 50%) 11.6em 16em,
  radial-gradient(6em 6em at 50% 14em, ${br} 50%, ${t} 50%) -11.6em 16em
`;

const face = `
  radial-gradient(18em 20em at 50% 14em, ${be} 49.5%, ${t} 50%) 50% 0em

`;

const eyes = `
  radial-gradient(0.8em 0.8em at 50% 12em, ${w} 45%, ${t} 50%) 2.9em 0em,
  radial-gradient(0.8em 0.8em at 50% 12em, ${w} 45%, ${t} 50%) -4.1em 0em,
  radial-gradient(2.5em 2.5em at 50% 12.5em, ${b} 45%, ${t} 50%) 3.1em 0em,
  radial-gradient(2.5em 2.5em at 50% 12.5em, ${b} 45%, ${t} 50%) -3.9em 0em,
  radial-gradient(4.5em 4.5em at 50% 13em, ${w} 45%, ${t} 50%) 3.5em 0em,
  radial-gradient(4.5em 4.5em at 50% 13em, ${w} 45%, ${t} 50%) -3.5em 0em
`;

const mouth = `
  linear-gradient(${be}, ${be}) 50% 10em / 8em 8em,
  radial-gradient(8em 8em at 50% 17.5em, ${w} 49%, ${t} 50%)
`;

const strand = `
  radial-gradient(10em 6em at 14.8rem 7em, ${br} 50%, ${t} 50%),
  radial-gradient(8em 8em at 16rem 5.4em, ${br} 50%, ${t} 50%)
`;

const widthBody = 17;
const topPositionBody = 20;
const skirtWidth = 16;

const body = `
  radial-gradient(${widthBody}em ${widthBody}em at 50% 14em, ${r} 50%, ${t} 50%) 50% ${topPositionBody}em,
  linear-gradient(${r}, ${r}) 50% ${topPositionBody +
  14}em / ${widthBody}em 18em,
  linear-gradient(-50deg, ${r} 45%, transparent 10%) calc(50% - ${skirtWidth /
  2}em) ${topPositionBody + 14}em / 19em 19em,
  linear-gradient(50deg, ${r} 45%, transparent 10%) calc(50% + ${skirtWidth /
  2}em) ${topPositionBody + 14}em / 19em 19em
  
`;

const foot = `
  radial-gradient(11em 9em at calc(42%) calc(50% + 30em),#000 38%,transparent 40%), 
  radial-gradient(11em 9em at calc(58%) calc(50% + 30em),#000 38%,transparent 40%)
`;

const hand = `
  radial-gradient(8em 8em at calc(28%) calc(50% + 7em),${be} 38%,transparent 40%),
  radial-gradient(8em 8em at calc(72%) calc(50% + 7em),${be} 38%,transparent 40%)  
`;

const Character = styled.div`
  background: ${hand}, ${foot}, ${strand}, ${eyes}, ${mouth}, ${face}, ${body},
    ${curly}, ${hair};
  background-repeat: no-repeat;
  font-size: 10px;
  height: 60em;
  width: 60em;
  position: fixed;
  bottom: 0em;
  left: 4vw;
  z-index: 4;
  transition: all 0.3s ease;
  transform-origin: bottom left;

  @media screen and (max-height: 720px) {
    transform: scale(0.8);
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.5);
  }
`;

const Avatar = () => {
  return <Character />;
};

export default Avatar;
