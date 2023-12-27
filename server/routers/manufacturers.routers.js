const express = require('express');
const router = express.Router();
const { getManufacturers, deleteManufacturer, updateManufacturer, createManufacturer } = require('../controllers/manufacturers.controller');
const validateManufacturer = require('../request/manufacturer.request');

router.get('/', getManufacturers);

router.post('/', validateManufacturer, createManufacturer);

router.put('/:id', updateManufacturer);

router.delete('/:id', deleteManufacturer);

module.exports = router;