import React, { ReactNode } from "react";

import { BubbleStyles, Text } from "./styles";

export type LeftRight = "left" | "right";
export interface BubbleProps {
  children: ReactNode;
  position: LeftRight;
}

const Bubble = ({ children, position }: BubbleProps) => {
  return (
    <BubbleStyles position={position}>
      <Text>{children}</Text>
    </BubbleStyles>
  );
};

export default Bubble;
