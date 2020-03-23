import React, { ReactNode } from "react";
import styled from "styled-components";

interface FlexProps {
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?: "center" | "flex-start" | "flex-end";
  wrap?: "wrap" | "nowrap";
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
`;

export default Flex;
