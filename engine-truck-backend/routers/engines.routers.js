const express = require('express');
const router = express.Router();
const {getEngines, createEngine, updateEngine, deleteEngine} = require('../controllers/engines.controller');
const validateEngine = require('../request/engine.request');

router.get('/', getEngines);

router.post('/', validateEngine, createEngine);

router.put('/:id', updateEngine);

router.delete('/:id', deleteEngine);

module.exports = router;