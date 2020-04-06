const html = (body: string) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="to do" />

    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,800|Vibur&display=swap"
      rel="stylesheet"
    />

    <title>Gloria LUZIO</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${body}</div>
    <div id="modal-root"></div>
    
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.1.2/react-router-dom.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/styled-components/5.0.1/styled-components.min.js"></script>
    <script type="text/javascript" src="client.js"></script>
  </body>
</html>`;
};

export default html;
