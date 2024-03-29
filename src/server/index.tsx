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
const SSL = process.env.SSL ? true : false;

const app = express();

/**
 * Handle https redirection
 */
app.use((req, res, next) => {
  if (SSL && req.headers["x-forwarded-proto"] === "http") {
    res.redirect(301, "https://" + req.headers.host + req.url);
  }
  next();
});

app.use(express.static("dist"));
app.use(express.static("public"));

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
