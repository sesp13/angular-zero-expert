const { Router } = require('express');
const { check } = require('express-validator');
const {
  createUser,
  userLogin,
  revalidateToken,
} = require('../controllers/auth.controller');
const { fieldValidator } = require('../middlewares/fieldValidator.middleware');

const router = Router();

// Create a new user
router.post(
  '/new',
  [
    check('name', 'name field is required').notEmpty(),
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').isLength({ min: 6 }),
    fieldValidator,
  ],
  createUser
);

// Create a new user
router.post(
  '/',
  [
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').isLength({ min: 6 }),
    fieldValidator,
  ],
  userLogin
);

// Validate and revalidate token
router.get('/renew', revalidateToken);

module.exports = router;
