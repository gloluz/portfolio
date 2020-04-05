import styled from "styled-components";

export const ProfilContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;

export const BlackBoard = styled.div`
  height: 180px;
  width: 250px;
  background-color: #16160a;
  margin-bottom: 10px;
  border: 15px solid #f3a433;
  border-radius: 5px;
  position: absolute;
  bottom: 300px;
  left: 40vw;

  @media screen and (max-width: 1024px) {
    left: 60vw;
    bottom: 240px;
    transform: scale(0.7);
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.6);
    bottom: 200px;
    left: 60vw;
    right: 0px;
    margin-right: -55px;
  }

  &:after {
    content: "";
    display: block;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: red;
    margin-top: -10px;
    margin-left: 60px;
    position: relative;
  }

  &:before {
    content: "";
    display: block;
    height: 195px;
    width: 2px;
    background-color: #e87f79;
    position: absolute;
    top: -10px;
    left: 62px;
  }
`;

export const BlackBoardPostIt = styled.div`
  height: 20px;
  width: 40px;
  background-color: #fff;
  position: absolute;
  top: 25px;
  left: 40px;
  transform: rotate(-2deg);

  &:after {
    content: "";
    display: block;
    height: 20px;
    width: 40px;
    background-color: #fff;
    position: absolute;
    top: 55px;
    left: 0;
    transform: rotate(-2deg);
  }

  &:before {
    content: "";
    display: block;
    height: 20px;
    width: 40px;
    background-color: #fff;
    position: absolute;
    top: 110px;
    left: 0;
    transform: rotate(-2deg);
  }
`;

interface BlackBoardTextProps {
  top: number;
}

export const BlackBoardText = styled.span<BlackBoardTextProps>`
  width: 100px;
  position: absolute;
  top: ${({ top }) => top}px;
  right: 10%;
  color: #fff;
  font-family: cursive;
  font-size: 6px;
`;

export const Informations = styled.div`
  cursor: pointer;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 50;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const SocialNetworkContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 0;
  z-index: 5;
  display: flex;
`;

export const LinkLogo = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin-right: 20px;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ModalList = styled.ul`
  font-weight: 400;
  padding: 10px 0 0 0;
  list-style: none;
`;

export const ListStyle = styled.li`
  padding: 0px 10px 20px 25px;
  position: relative;
  font-size: 16px;

  a {
    text-decoration: none;
    color: #777;
    border-bottom: 1px dotted #777;

    &:hover {
      border-bottom: none;
    }
  }

  &:before,
  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 10px;
    background-color: #000;
    position: absolute;
    left: 0;
    top: 10px;
  }

  &:before {
    transform-origin: right;
    transform: rotate(45deg);
  }

  &:after {
    transform-origin: right;
    transform: rotate(-45deg);
  }
`;
