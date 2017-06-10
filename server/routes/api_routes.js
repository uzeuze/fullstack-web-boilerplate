const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main_controller');

router.get('/hello', mainController.hello);

module.exports = router;
