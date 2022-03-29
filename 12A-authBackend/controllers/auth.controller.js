const { response } = require('express');
const { request } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const createUser = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;
    // Verify unique email
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.status(400).json({
        ok: false,
        msg: 'The email is not available',
      });
    }

    // Create user
    const dbUser = new User(req.body);

    // encrypt password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    // Save user
    await dbUser.save();

    // Generate JWT
    const token = await generateJWT(dbUser.id, dbUser.name);

    // Generate success response
    return res
      .status(201)
      .json({ ok: true, uid: dbUser.id, name: dbUser.name, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Please talk with the admin',
    });
  }
};

const userLogin = (req = request, res = response) => {
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
