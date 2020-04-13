import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter as Router } from "react-router-dom";
import dotenv from "dotenv";
import { Helmet } from "react-helmet";

import { Context } from "entities";

dotenv.config();

import html from "./html";
import App from "../client/App";

const PORT = process.env.PORT || 3000;

const app = express();

/**
 * Handle https redirection
 */
app.use((request, response, next) => {
  if (process.env.SCHEME === "https" && !request.secure) {
    response.redirect(301, "https://" + request.headers.host + request.url);
  }

  next();
});

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

  const helmet = Helmet.renderStatic();

  if (context.url) {
    res.writeHead(302, { Location: context.url });
  }

  if (context.status) {
    res.status(context.status);
  }

  res.send(html(helmet, body));
});

app.listen(PORT, () => {
  console.log(`🚀 Listening on http://localhost:${PORT}`);
});
