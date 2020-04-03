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

export const Character = styled.div`
  background: ${hand}, ${foot}, ${strand}, ${eyes}, ${mouth}, ${face}, ${body},
    ${curly}, ${hair};
  background-repeat: no-repeat;
  font-size: 10px;
  height: 600px;
  width: 600px;
  transition: all 0.3s ease;
  transform-origin: bottom left;
  z-index: 4;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 10px -10px 0 70px;
  transform: scale(0.7);

  @media screen and (max-width: 768px) {
    transform: scale(0.5);
    margin: 0 0 0 12px;
  }
`;

export const PaperSheet = styled.div`
  height: 180px;
  width: 150px;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  bottom: 25%;
  left: 15px;
  transform: rotate(-10deg);

  @media screen and (max-width: 768px) {
    transform: rotate(-10deg) scale(1.2) translateY(-20px);
  }
`;

interface LineProps {
  width: number;
}

export const Line = styled.div<LineProps>`
  height: 4px;
  width: ${({ width }) => width}px;
  margin: 10px;
  background-color: #d9d9d9;
`;

export const Arrow = styled.div`
  width: 3px;
  height: 13px;
  background-color: #000;
  margin: 0 auto;
  transition: 0.3s all ease;

  &:before {
    content: "";
    display: block;
    width: 3px;
    height: 10px;
    background-color: #000;
    transform: rotate(45deg) translateX(1px);
    position: absolute;
    transform-origin: bottom left;
    transition: 0.3s all ease;
  }

  &:after {
    content: "";
    display: block;
    width: 3px;
    height: 10px;
    background-color: #000;
    transform: rotate(-45deg) translateX(-1px);
    position: absolute;
    transform-origin: bottom right;
    transition: 0.3s all ease;
  }
`;

export const DownloadContainer = styled.div`
  width: 17px;
  height: 16px;
  border-bottom: 3px solid #000;
  position: relative;
  transition: 0.3s all ease;
`;

export const CV = styled.a`
  width: 120px;
  height: 50px;
  margin: 15px 5px;
  padding: 10px 5px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid black;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  line-height: 26px;
  cursor: pointer;
  transition: 0.3s all ease;
  text-decoration: none;

  &:hover {
    color: #fff;
    background-color: #444444;

    ${DownloadContainer} {
      border-bottom-color: #fff;

      ${Arrow} {
        background-color: #fff;

        &:before,
        &:after {
          background-color: #fff;
        }
      }
    }
  }
`;
