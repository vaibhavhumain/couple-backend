const express = require('express');
const router = express.Router();
const { saveFeeling } = require('../controllers/feelingController');

router.post('/', saveFeeling);

module.exports = router;
 