const express = require('express');
const router = express.Router();
const {getComponents, createComponent, updateComponent, deleteComponent} = require('../controllers/components.controller');
const validateComponent = require('../request/component.request');
const verifyToken = require('../middlewares/auth.jwt.middleware');

router.get('/', getComponents);

router.post('/', verifyToken, validateComponent, createComponent);

router.put('/:id', verifyToken, updateComponent);

router.delete('/:id', verifyToken, deleteComponent);

module.exports = router;