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
  Pen
} from "./styles";

const Desk = () => {
  return (
    <DeskStyle>
      <Laptop></Laptop>
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
