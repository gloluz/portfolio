import React, { useState } from "react";

import ScrollingTextBubble from "../../components/ScrollingTextBubble";
import Avatar from "../../components/Avatar";
import Desk from "../../components/Desk";
import Modal from "../../components/Modal";
import {
  BlackBoardPostIt,
  BlackBoardText,
  Informations,
  BlackBoard,
  SocialNetworkContainer,
  LinkLogo,
  ProfilContainer,
  ModalList,
  ListStyle
} from "./styles";
import Icon from "../../components/Icon";
import Lamp from "../../components/Lamp";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ProfilContainer>
      <Lamp />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div>Détails Techniques</div>

          <ModalList>
            <ListStyle>
              Excepté les logos et les miniatures des projets, aucune image n'a
              été utilisée. Les illustrations sont développées uniquement en
              CSS.
            </ListStyle>

            <ListStyle>
              Ce portfolio est développé en React et Typescript.
            </ListStyle>

            <ListStyle>
              Vous pouvez consulter le code source{" "}
              <a href="https://github.com/gloluz/portfolio" target="_blank">
                ici
              </a>
            </ListStyle>
          </ModalList>
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
        <BlackBoardText top={20}>
          Développement de l'application AKO en partenariat avec Koudetat/The
          Family.
        </BlackBoardText>

        <BlackBoardText top={72}>
          Bootcamp à Le Reacteur de janvier à mars 2020 axé sur React/React
          Native.
        </BlackBoardText>

        <BlackBoardText top={128}>
          Infirmière à l'hôpital Robert Debré, j'y ai appris le travail en
          équipe et la gestion du stress.
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
