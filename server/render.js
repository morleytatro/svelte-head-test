import DefaultPage from '../src/components/DefaultPage';

export default stats => (_req, res) => {
  console.log(stats);
  const { html, head } = DefaultPage.render();

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  ${head}
</head>
<body>
  <div id="root">${html}</div>
  <script src="/static/bundle.js"></script>
</body>
</html>
`);
}