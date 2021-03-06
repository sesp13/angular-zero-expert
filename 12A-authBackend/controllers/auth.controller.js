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
    const token = await generateJWT(dbUser.id);

    // Generate success response
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Please talk with the admin',
    });
  }
};

const userLogin = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    // Check email
    const dbUser = await User.findOne({ email });
    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "The user doesn't exists",
      });
    }

    // Check password
    const validPassword = bcrypt.compareSync(password, dbUser.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Invalid password',
      });
    }

    // Generate JWT
    const token = await generateJWT(dbUser.id);

    // Generate success response
    return res.status(200).json({
      ok: true,
      uid: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      pk: false,
      msg: 'Please talk with the admin',
    });
  }
};

const revalidateToken = async (req = request, res = response) => {
  try {
    // Get variables from the request
    const { uid } = req;
    // Get user
    const dbUser = await User.findById(uid);
    // Generate new token
    const token = await generateJWT(uid);
    return res.json({
      ok: true,
      uid,
      name: dbUser.name,
      email: dbUser.email,
      msg: 'Renew token',
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  userLogin,
  revalidateToken,
};
