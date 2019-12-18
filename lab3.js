const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/Home', (req, res) => {
  res.render('home');
});
app.get('/Ethel', (req, res) => {
  res.render('Ethel');
});
app.get('/Horld', (req, res) => {
  res.render('Horld');
});
app.get('/Jim', (req, res) => {
  res.render('Jim');
});
app.get('/Amritpal', (req, res) => {
  res.render('Amritpal');
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});