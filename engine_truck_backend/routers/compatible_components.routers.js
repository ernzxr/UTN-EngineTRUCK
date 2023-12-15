const express = require('express');
const router = express.Router();
const {getCompatibleComponents, createCompatibleComponent, updateCompatibleComponent, deleteCompatibleComponent} = require('../controllers/compatible_components.controller');
const validateCompatibleComponent = require('../request/compatible_component.request');

router.get('/', getCompatibleComponents);

router.post('/', validateCompatibleComponent, createCompatibleComponent);

router.put('/:id', updateCompatibleComponent);

router.delete('/:id', deleteCompatibleComponent);

module.exports = router;