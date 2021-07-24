const connection = require('../database/connection');
const moment = require('moment');

function getMyAccountInfo(req, res) {
  let params = req.params;

  let id_user = req.user.userId;

  if (!params) return res.send({ message: 'Error al acceder a la cuenta' });

  let SQL_CKECK_IF_USER_HAVE_ACCOUNT = `SELECT * FROM account WHERE id_user='${id_user}'`;

  connection.query(SQL_CKECK_IF_USER_HAVE_ACCOUNT, (err, user) => {
    if (err) return res.send({ message: 'Error al buscar el usuario' });

    if (user.length == 0)
      return res.status(200).send({
        userHaveAccount: false,
        message: 'Aun no tienes ninguna cuenta bancaria, crea una',
      });
    else {
      let SQL_GET_ACCOUNTS_INFO = `SELECT * FROM account WHERE 
      id_user=${id_user}`;

      connection.query(SQL_GET_ACCOUNTS_INFO, (err, accounts) => {
        if (err) return res.send({ message: 'Error al obtener las cuentas' });

        return res.send({
          userHaveAccount: true,
          accounts,
        });
      });
    }
  });
}

function createAccount(req, res) {
  let params = req.body;

  let id_user = req.user.userId;

  if (!params) return res.send({ message: 'Error al crear la cuenta' });

  if (params.account_name == undefined || params.account_name === null) {
    return res.send({ message: 'Debes especificar un nombre para la cuenta' });
  }

  let SQL_CHECK_ACCOUNT_REPEAT = `SELECT * FROM account WHERE account_name='${params.account_name}' AND id_user=${id_user}`;

  connection.query(SQL_CHECK_ACCOUNT_REPEAT, (err, account) => {
    if (err) return res.send({ message: err });
    if (account.length > 0) {
      return res.send({ message: 'Ya existe una cuenta con este nombre' });
    } else {
      let SQL_CREATE_ACCOUNT = `INSERT INTO account (id_user, total_inserts, current_savings, account_name) 
        VALUES (${id_user}, 0, 0, '${params.account_name}')`;

      connection.query(SQL_CREATE_ACCOUNT, (err, result) => {
        if (err) return res.send({ message: err });
        return res.status(200).send({
          userHaveAccount: true,
          message: `Cuenta ${params.account_name} creada con exito`,
        });
      });
    }
  });
}

function updateSavings(req, res) {
  let id_user = req.user.userId;
  let { quantity, percentage, id_account } = req.body;
  let savings = Number.parseFloat(
    calculatePercentegeSavings(percentage, quantity)
  );

  console.log(savings);
  let SQL_INSERT_SAVINGS = `UPDATE account SET 
  total_inserts=total_inserts+${quantity}, 
  current_savings=current_savings+${savings} 
  WHERE id=${id_account}`;

  connection.query(SQL_INSERT_SAVINGS, (err, result) => {
    if (err) return res.send({ message: err });
    let currentDate = moment(new Date()).format('YYYY-MM-DD');
    console.log(currentDate);
    let SQL_ADD_HISTORY = `INSERT INTO history (id_account, date, quantity_saving) 
      VALUES (${id_account},'${currentDate}', ${savings})`;

    connection.query(SQL_ADD_HISTORY, (err, result) => {
      if (err) return res.send({ message: err });
      return res
        .status(200)
        .send({ message: `Se han ingresado ${savings} € con exito` });
    });
  });
}

function calculatePercentegeSavings(percentage, quantity) {
  let result = (percentage * quantity) / 100;
  return result;
}

module.exports = {
  getMyAccountInfo,
  createAccount,
  updateSavings,
};
