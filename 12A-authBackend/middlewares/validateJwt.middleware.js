const { response } = require('express');
const { request } = require('express');
const jsonwebtoken = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No token provided',
    });
  }
  try {
    // Validate token
    const { uid, name, email } = jsonwebtoken.verify(token, process.env.JWTKEY);
    // Pass variables
    req.uid = uid;
    req.name = name;
    req.email = email;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid Token',
    });
  }
};

module.exports = {
  validateJWT,
};
