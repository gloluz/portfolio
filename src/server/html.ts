import { HelmetData } from "react-helmet";

const html = (helmet: HelmetData, body: string) => {
  return `<!DOCTYPE html>
<html lang="en" ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${body}</div>
    <div id="modal-root"></div>
    
    <script defer src="//cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js"></script>
    <script defer src="//cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js"></script>
    <script defer src="//cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.1.2/react-router-dom.min.js"></script>
    <script defer src="/client.js"></script>
  </body>
</html>`;
};

export default html;
