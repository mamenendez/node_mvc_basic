const express = require('express');
const router = express.Router();

const mainController = require("../controllers/mainControllers");

router.get('/', mainController.home);

router.get('/about', mainController.about);

module.exports = router;
  