

export default async function SSRController(request, response) {

    return response.status(200)
        .type('html')
        .send(`<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Hello</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="font-family: system-ui, sans-serif; margin: 2rem;">
  <h1>Hello, world!</h1>
  <p>Servido diretamente pelo controlador do Express.</p>
</body>
</html>`);

};
