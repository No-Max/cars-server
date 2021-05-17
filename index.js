const express = require('express');
const app = express();
const fs = require('fs');

const port = 3000;
const host = 'localhost';
 
app.get('/', (req, res) => {
  res.send(fs.readFileSync('./html/index.html', 'utf8'));
});

app.get('/cars', (req, res) => {
  res.send(require('./db/cars.js'))
})
 
app.listen(port, host, () => {
  console.log(`Server started on ${host}:${port}`);
});