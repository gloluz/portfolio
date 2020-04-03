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
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.6);
    bottom: 130px;
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

export const BlackBoardText = styled.span`
  width: 100px;
  position: absolute;
  top: 20px;
  right: 10%;
  color: #fff;
  font-family: cursive;
  font-size: 6px;

  &:before {
    content: "Bootcamp à Le Reacteur de janvier à mars 2020 axé sur React/React Native.";
    position: absolute;
    top: 55px;
  }

  &:after {
    content: "Infirmière à l'hôpital Robert Debré, j'y ai appris le travail en équipe et la gestion du stress.";
    position: absolute;
    top: 110px;
    right: 10%;
  }
`;

export const Informations = styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  left: 20px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
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
  border: 1px solid #d9d9d9;
  padding: 10px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;
