const mysql = require("mysql2");

const dbMedico = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "medico",
});

module.exports = dbMedico;
