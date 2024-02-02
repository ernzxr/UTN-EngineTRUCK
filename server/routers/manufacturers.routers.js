const express = require('express');
const router = express.Router();
const { getManufacturers, deleteManufacturer, updateManufacturer, createManufacturer } = require('../controllers/manufacturers.controller');
const validateManufacturer = require('../request/manufacturer.request');
const verifyToken = require('../middlewares/auth.jwt.middleware');

router.get('/', getManufacturers);

router.post('/', verifyToken, validateManufacturer, createManufacturer);

router.put('/:id', verifyToken, updateManufacturer);

router.delete('/:id', verifyToken, deleteManufacturer);

module.exports = router;