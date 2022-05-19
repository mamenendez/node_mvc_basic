const express = require('express');
const router = express.Router();

const productoejsController = require("../controllers/productoejsControllers");

router.get('/', productoejsController.productosejs);

module.exports =router;