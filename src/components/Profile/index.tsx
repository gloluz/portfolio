import React from "react";

import ScrollingTextBubble from "../ScrollingTextBubble";
import Avatar from "../Avatar";
import Desk from "../Desk";
import styled from "styled-components";
import { Sidebar } from "../Layout";

const BlackBoard = styled.div`
  height: 180px;
  width: 250px;
  background-color: #16160a;
  margin-bottom: 10px;
  border: 15px solid #f3a433;
  border-radius: 5px;
  position: absolute;
  top: 140px;
  left: 50%;

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

const BlackBoardPostIt = styled.div`
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

const BlackBoardText = styled.span`
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

const Profile = () => {
  return (
    <div>
      <Sidebar>
        <ScrollingTextBubble
          position="left"
          scrollingTexts={[
            "Bonjour je m'appelle Gloria Luzio, bienvenue sur mon portfolio !",
            "anciennement infirmière, je me suis reconvertie dans le domaine du développement web / mobile"
          ]}
        />
        <BlackBoard>
          <BlackBoardPostIt />
          <BlackBoardText>
            Développement de l'application AKO en partenariat avec Koudetat/The
            Family.
          </BlackBoardText>
        </BlackBoard>
        <Avatar />
        <Desk />
      </Sidebar>
    </div>
  );
};

export default Profile;
