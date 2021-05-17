const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(cors());

const port =  process.env.PORT || 3000;
 
app.get('/', (req, res) => {
  res.send(fs.readFileSync('./html/index.html', 'utf8'));
});

app.get('/cars', (req, res) => {
  res.send(require('./db/cars.js'))
})
 
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});