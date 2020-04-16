import React, { ReactNode, useContext } from "react";

import { BubbleStyles, Text } from "./styles";
import LightContext from "../../Context/LightContext";

export type LeftRight = "left" | "right";
export interface BubbleProps {
  children: ReactNode;
  position: LeftRight;
}

const Bubble = ({ children, position }: BubbleProps) => {
  const context = useContext(LightContext);

  return (
    <>
      <BubbleStyles position={position} isOn={context.lightOn}>
        <Text>{children}</Text>
      </BubbleStyles>

      <BubbleStyles
        position={position}
        isOn={context.lightOn}
        bgColor={"#97b9d0"}
        style={{ opacity: context.lightOn ? 0 : 1 }}
      >
        <Text>{children}</Text>
      </BubbleStyles>
    </>
  );
};

export default Bubble;
