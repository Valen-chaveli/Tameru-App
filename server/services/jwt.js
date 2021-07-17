let jwt = require('jwt-simple');
let moment = require('moment');

exports.createToken = function (user) {
  let payload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix(),
  };

  return jwt.encode(payload, process.env.SECRET_KEY_TOKEN);
};
