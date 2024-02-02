const express = require('express');
const router = express.Router();
const {getCompatibleComponents, createCompatibleComponent, updateCompatibleComponent, deleteCompatibleComponent} = require('../controllers/compatible_components.controller');
const validateCompatibleComponent = require('../request/compatible_component.request');
const verifyToken = require('../middlewares/auth.jwt.middleware');

router.get('/', getCompatibleComponents);

router.post('/', verifyToken, validateCompatibleComponent, createCompatibleComponent);

router.put('/:id', verifyToken, updateCompatibleComponent);

router.delete('/:id', verifyToken, deleteCompatibleComponent);

module.exports = router;