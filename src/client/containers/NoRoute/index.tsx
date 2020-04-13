import React from "react";
import { Context } from "entities";
import { Container } from "../../components/Layout";
import { Helmet } from "react-helmet";
import { SITE_TITLE } from "../../constant";

export interface NoRouteProps {
  staticContext?: Context;
}

export default ({ staticContext = {} }: NoRouteProps) => {
  staticContext.status = 404;

  return (
    <Container>
      <Helmet>
        <title>404 Non trouvé - {SITE_TITLE}</title>
      </Helmet>
      <div style={{ fontWeight: "bold", fontSize: 24, marginTop: 20 }}>
        Oops, rien sur cette page!
      </div>
    </Container>
  );
};
