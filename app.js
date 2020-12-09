const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('¡Hello World ....!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});