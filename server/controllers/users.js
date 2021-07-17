const connection = require('../database/connection');

function example(req, res) {
  connection.query('SELECT * FROM users', (err, results, fields) => {
    console.log(results);
  });
}

module.exports = {
  example,
};
