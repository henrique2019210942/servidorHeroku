const mysql = require("mysql2");

const dbPciente = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "paciente",
});

module.exports = dbPciente;
