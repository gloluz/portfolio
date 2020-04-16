import React from "react";

import {
  DeskStyle,
  Laptop,
  Cactus,
  PostIt,
  GreenPostIt,
  YellowPostIt,
  OrangePostIt,
  BluePostIt,
  PinkPostIt,
  Pen,
} from "./styles";
import { Link } from "react-router-dom";

const Desk = () => {
  return (
    <DeskStyle>
      <Link to="/projets" style={{ cursor: "pointer" }}>
        <Laptop></Laptop>
      </Link>
      <Cactus />

      <PostIt>
        <GreenPostIt />
        <YellowPostIt />
        <OrangePostIt />
        <BluePostIt />
        <PinkPostIt />
      </PostIt>
      <Pen />
    </DeskStyle>
  );
};

export default Desk;
