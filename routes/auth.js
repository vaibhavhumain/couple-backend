const express = require('express');
const router = express.Router();
const { signup, login, getMe } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', getMe);

module.exports = router;
