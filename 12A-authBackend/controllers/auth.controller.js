const { response } = require('express');
const { request } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ ok: false, errors: errors.mapped() });
  }
  const { email, name, password } = req.body;
  return res.json({ ok: true, msg: 'Create user' });
};

const userLogin = (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ ok: false, errors: errors.mapped() });
  }
  const { email, password } = req.body;
  return res.json({ ok: true, msg: 'User login' });
};

const revalidateToken = (req, res) => {
  return res.json({ ok: true, msg: 'Renew token' });
};

module.exports = {
  createUser,
  userLogin,
  revalidateToken,
};
