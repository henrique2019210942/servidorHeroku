const mysql = require("mysql2");

const dbMedico = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bf9e0df16393d2",
  password: "2722131b",
  database: "heroku_1a5758074ee6056",
});

module.exports = dbMedico;
