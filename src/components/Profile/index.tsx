import React, { useState } from "react";

import ScrollingTextBubble from "../ScrollingTextBubble";
import Avatar from "../Avatar";
import Desk from "../Desk";
import Modal from "../Modal";
import {
  BlackBoardPostIt,
  BlackBoardText,
  Informations,
  BlackBoard,
  SocialNetworkContainer,
  LinkLogo,
  ProfilContainer
} from "./styles";
import Icon from "../Icon";
import Lamp from "../Lamp";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ProfilContainer>
      <Lamp />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          Toutes les illustrations présentes dans ce site sont faites uniquement
          en CSS .
        </Modal>
      )}

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

      <Informations onClick={() => setShowModal(true)}>?</Informations>

      <Desk />

      <SocialNetworkContainer>
        <LinkLogo
          href="https://www.linkedin.com/in/gloria-luzio-a7b05819b/"
          target="_blanck"
        >
          <Icon size={24} icon="linkedin2" />
        </LinkLogo>

        <LinkLogo href="https://github.com/gloluz" target="_blanck">
          <Icon size={24} icon="github" />
        </LinkLogo>
      </SocialNetworkContainer>
    </ProfilContainer>
  );
};

export default Profile;
