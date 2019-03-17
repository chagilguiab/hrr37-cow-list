const express = require ('express');
const app = express()
const db = require('./db')

const port = 3000;

app.get('/', (req,res) => res.send('Hello World, Again!'))

app.get('/api/cows', (req,res) => {
  //TODO:
  //respond with array of cow data from db -> e.g. [{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}]
  var queryString = 'select * from cows';
  db.query(queryString, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  })
})

app.post('/api/cows', (req,res) => {
  //TODO:
  //take cow data from req.body and
  var cowData = req.body;
  console.log(cowData);
  // const {name, description} = cowData;
  var queryString = `insert into cows (name, text) values (${name}, ${description})`;
  //post to data base
  db.query(queryString, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(req.body);
    }
  })
  //respond with the data that was sent in
})

app.listen(port, () => console.log('Server listening on port: ', port));