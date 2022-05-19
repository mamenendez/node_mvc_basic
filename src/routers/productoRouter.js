const express = require('express');
const router = express.Router();


const productoController = require("../controllers/productoControllers");

router.get('/', productoController.productos);

router.get('/detalle/:id', productoController.detalle);

module.exports = router;