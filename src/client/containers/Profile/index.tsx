import React, { useState, CSSProperties } from "react";
import { Helmet } from "react-helmet";

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
import { useSpring, animated } from "react-spring";
import { MEDIA, SITE_TITLE } from "../../constant";
import styled from "styled-components";

const calc = (x: number, y: number) => {
  if (typeof window === "undefined") {
    return [0, 0];
  }

  return [x - window.innerWidth / 2, y - window.innerHeight / 2];
};

const lampTrans = (...[x, y]: any) => {
  if (typeof window === "undefined" || window.innerWidth <= 768)
    return `translate3d(0,0,0)`;

  return `translate3d(${x / 12}px,${y / 12 - 60}px,0)`;
};

const bubbleTrans = (...[x, y]: any) => {
  if (typeof window === "undefined" || window.innerWidth <= 768)
    return `translate3d(0,0,0)`;

  return `translate3d(${x / 50}px,${y / 50}px,0)`;
};

const avatarTrans = (...[x, y]: any) => {
  if (typeof window === "undefined" || window.innerWidth <= 768)
    return `translate3d(0,0,0)`;

  return `translate3d(${x / 15 + 10}px,${y / 15 + 25}px,0)`;
};

const blackBoardTrans = (...[x, y]: any) => {
  if (typeof window === "undefined" || window.innerWidth <= 768)
    return `translate3d(0,0,0)`;

  return `translate3d(${x / 30}px,${y / 30}px,0)`;
};

const deskTrans = (...[x, y]: any) => {
  if (typeof window === "undefined" || window.innerWidth <= 768)
    return `translate3d(0,0,0)`;

  return `translate3d(${x / 20 + 50}px,${y / 20 + 20}px,0)`;
};

const LampContainer = styled(animated.div)`
  position: absolute;
  top: 0;
  bottom: 600px;
  left: 50%;
  z-index: 2;
  display: none;
  flex-direction: column;

  @media screen and (max-width: 768px) and (min-height: 600px) {
    display: flex;
  }

  ${MEDIA.MIN.l} {
    display: flex;
  }

  ${MEDIA.MIN.xl} {
    bottom: 700px;
  }
`;

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const [props, set] = useSpring<{ xy: number[] }>(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 300, friction: 100 }
  }));

  const style: CSSProperties = {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1
  };

  return (
    <>
      <Helmet>
        <title>Profil - {SITE_TITLE}</title>
        <meta name="description" content="Portfolio de Gloria Luzio" />

        <meta
          property="og:title"
          content="Profil | Gloria Luzio - développeuse Javascript"
        />
        <meta
          property="og:description"
          content="Découvrez mon profil à travers mon portfolio."
        />
        <meta property="og:url" content="https://www.glorialuzio.fr" />
      </Helmet>

      <ProfilContainer
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          style={{ ...style, transform: props.xy.interpolate(blackBoardTrans) }}
        >
          <BlackBoard>
            <BlackBoardPostIt />
            <BlackBoardText top={24} />
            <BlackBoardText top={76} />
            <BlackBoardText top={132} />
          </BlackBoard>
        </animated.div>

        <animated.div
          style={{ ...style, transform: props.xy.interpolate(deskTrans) }}
        >
          <Desk />
        </animated.div>

        <animated.div
          style={{ ...style, transform: props.xy.interpolate(bubbleTrans) }}
        >
          <ScrollingTextBubble
            position="left"
            scrollingTexts={[
              "Bonjour je m'appelle Gloria Luzio, bienvenue sur mon portfolio !",
              "anciennement infirmière, je me suis reconvertie dans le domaine du développement web / mobile"
            ]}
          />
        </animated.div>

        <animated.div
          style={{
            ...style,
            top: undefined,
            transform: props.xy.interpolate(avatarTrans)
          }}
        >
          <Avatar />
        </animated.div>

        <LampContainer>
          <animated.div
            style={{
              flex: 1,
              transform: props.xy.interpolate(lampTrans)
            }}
          >
            <Lamp />
          </animated.div>
        </LampContainer>

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

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div>Détails Techniques</div>

            <ModalList>
              <ListStyle>
                Excepté les logos et les miniatures des projets, aucune image
                n'a été utilisée. Les illustrations sont développées uniquement
                en CSS.
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
        <Informations onClick={() => setShowModal(true)}>?</Informations>
      </ProfilContainer>
    </>
  );
};

export default Profile;
