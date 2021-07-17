const connection = require('../database/connection');

function getMyAccountInfo(req, res) {
  res.send('Hola');
  console.log('Adios');
  console.log('ds');
}

module.exports = {
  getMyAccountInfo,
};
