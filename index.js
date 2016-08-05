const http = require('http');
const express = require('express');
const path = require('path');
const ghAvatar = require('gh-avatar');

const app = express();

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs', { names:['Abe', 'George', 'Sue']});
});

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

ghAvatar('sindresorhus').then(avatar => {
    console.log(avatar);
    //=> 'https://avatars.githubusercontent.com/u/170270?v=3'
});
