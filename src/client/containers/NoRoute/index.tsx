import React from "react";
import { Context } from "entities";
import { Container } from "../../components/Layout";

export interface NoRouteProps {
  staticContext?: Context;
}

export default ({ staticContext = {} }: NoRouteProps) => {
  staticContext.status = 404;

  return (
    <Container>
      <div style={{ fontWeight: "bold", fontSize: 24, marginTop: 20 }}>
        Oops, rien sur cette page!
      </div>
    </Container>
  );
};
