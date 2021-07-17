var mysql = require('mysql2');

let host = process.env.MYSQL_HOST || 'mysql_host';
let user = process.env.MYSQL_USER || 'root';
let password = process.env.MYSQL_ROOT_PASSWORD || 'valen.ValenNihongo7';
let dataBase = process.env.MYSQL_DB || 'tameru';

var con = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: dataBase,
  port: 3306,
});

con.connect(function (err) {
  if (err) {
    console.log('Error al conectar a la Base de datos');
    console.log(err);
  } else {
    console.log('Se ha conectado correctamente a la Base de Datos');
  }
});

module.exports = con;
