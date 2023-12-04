const express = require('express');
const router = express.Router();
const {getComponents, createComponent, updateComponent, deleteComponent} = require('../controllers/components.controller');
const validateComponent = require('../request/component.request');

router.get('/', getComponents);

router.post('/', validateComponent, createComponent);

router.put('/:id', updateComponent);

router.delete('/:id', deleteComponent);

module.exports = router;