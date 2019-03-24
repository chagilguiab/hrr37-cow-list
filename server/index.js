//PRO-TIP: Install node modules separately between client and server
const express = require ('express');
const app = express();
const parser = require('body-parser');
const jsonParser = parser.json();
const db = require('./db/index.js');
const path = require('path');
app.use(jsonParser);
app.use(express.static(__dirname + '/../client/dist'));

const port = 3000;

app.get('/', (req,res) => console.log('Hello there!'));

app.get('/api/cows', (req,res) => {
  var queryString = 'select * from cows';
  db.query(queryString, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  })
});


app.post('/api/cows', (req,res) => {
  var cowData = req.body;
  let name = cowData.name;
  let description = cowData.description;
  var queryString = `insert into cows (name, text) values ('${name}', '${description}')`;
  db.query(queryString, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  })
  console.log(queryString);
});

app.listen(port, () => console.log('Server listening on port: ', port));