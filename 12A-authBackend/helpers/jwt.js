const jwt = require('jsonwebtoken');

const generateJWT = (uid, name, email) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { uid, name, email },
      process.env.JWTKEY,
      {
        expiresIn: '24h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = { generateJWT };
