var mysql = require('mysql2');

let host = process.env.MYSQL_HOST || 'mysql_host';
let user = process.env.MYSQL_USER || 'root';
let password = process.env.MYSQL_ROOT_PASSWORD || 'valen.ValenNihongo7';
let dataBase = process.env.MYSQL_DB || 'tameru';

var con = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: dataBase,
  port: 3306,
  waitForConnections: true,
});

module.exports = con;
