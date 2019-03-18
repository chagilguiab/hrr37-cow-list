var mysql = require('mysql');

const con = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'db'
});

con.connect();

module.exports = con;