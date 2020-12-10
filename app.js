const express = require('express');
const app = express();
const port = 3000;

const data = require('./database/data.json');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    data: data.albums
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});