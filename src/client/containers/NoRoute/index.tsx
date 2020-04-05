import React from "react";
import { Context } from "entities";

export interface NoRouteProps {
  staticContext?: Context;
}

export default ({ staticContext = {} }: NoRouteProps) => {
  staticContext.status = 404;

  return <h1>Oops, nothing here!</h1>;
};
