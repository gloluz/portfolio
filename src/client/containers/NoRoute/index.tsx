import React from "react";
import { Context } from "entities";
import Flex from "../../components/Layout/Flex";
import { Container } from "../../components/Layout";

export interface NoRouteProps {
  staticContext?: Context;
}

export default ({ staticContext = {} }: NoRouteProps) => {
  staticContext.status = 404;

  return (
    <Container>
      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{ fontSize: 20, fontWeight: "bold" }}
      >
        Oops, rien sur cette page!
      </Flex>
    </Container>
  );
};
