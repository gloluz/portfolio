import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter as Router } from "react-router-dom";

import { Context } from "entities";

import html from "./html";
import App from "../client/App";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {
  const sheet = new ServerStyleSheet();
  const context: Context = {};

  const body =
    renderToString(
      sheet.collectStyles(
        <Router location={req.url} context={context}>
          <App />
        </Router>
      )
    ) + sheet.getStyleTags();

  if (context.url) {
    res.writeHead(302, { Location: context.url });
  }

  if (context.status) {
    res.status(context.status);
  }

  res.send(html(body));
});

app.listen(port, () => {
  console.log(`🚀  listening on url http://localhost:${port} !`);
});
