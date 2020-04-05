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
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>`;
};

export default html;
