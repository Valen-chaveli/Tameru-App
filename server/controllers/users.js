const connection = require('../database/connection');
const bcrypt = require('bcrypt-nodejs');
const { createToken } = require('../services/jwt');
const jwt = require('jwt-simple');
const moment = require('moment');

function example(req, res) {
  connection.query('SELECT * FROM users', (err, results, fields) => {});
}

function registerUser(req, res) {
  let params = req.body;

  if (!params) {
    return res.status(403).send({ message: 'Error en la peticion' });
  }

  if (params.name && params.email && params.password) {
    let SQL_CHECK_USER = `SELECT * FROM users WHERE email='${params.email}'`;

    connection.query(SQL_CHECK_USER, (err, users) => {
      if (err) return res.status(401).send({ message: 'Error' });
      if (users.length > 0) {
        return res.status(200).send({ message: 'Este usuario ya existe' });
      } else {
        bcrypt.hash(params.password, null, null, (err, hash) => {
          let SQL = `INSERT INTO users 
          (name, email, password) 
          VALUES ('${params.name}','${params.email}', '${hash}')`;

          connection.query(SQL, (err, userRegistred) => {
            if (err) return res.status(401).send({ message: err });

            connection.query(
              `SELECT * FROM users WHERE email='${params.email}'`,
              (err, user) => {
                if (err) return res.status(401).send({ message: err });
                user.forEach((u) => {
                  let token = createToken(u);
                  return res.status(200).send({ token: token, user: u });
                });
              }
            );
          });
        });
      }
    });
  } else {
    return res.send({ message: 'Envie todos los campos requeridos' });
  }
}

function loginUser(req, res) {
  let params = req.body;

  if (!params) {
    return res.status(403).send({ message: 'Error en la peticion' });
  }

  let SQL = `SELECT * FROM users WHERE email='${params.email}'`;

  connection.query(SQL, (err, user) => {
    if (err) return res.send({ message: 'Error al buscar al usuario' });
    if (user.length == 0) {
      return res.send({
        message: 'No se ha encontrado el usuario',
        error: true,
      });
    }

    bcrypt.compare(params.password, user[0].password, (err, check) => {
      if (err) return res.send({ err });
      if (check)
        return res.send({ token: createToken(user[0]), user: user[0] });
      else
        return res.send({
          message: 'La contraseña es incorrecta',
          error: true,
        });
    });
  });
}

function checkToken(req, res) {
  let token = req.body.token;
  console.log(token);
  try {
    var payload = jwt.decode(token, process.env.SECRET_KEY_TOKEN);

    if (payload.exp <= moment.unix()) {
      return res.send({ isValid: false });
    }
  } catch (error) {
    return res.send({ isValid: false });
  }

  return res.send({ payload: payload, isValid: true });
}

module.exports = {
  example,
  registerUser,
  loginUser,
  checkToken,
};
