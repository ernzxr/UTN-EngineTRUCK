const express = require('express');
const router = express.Router();
const {getEngines, createEngine, updateEngine, deleteEngine, filterEngine} = require('../controllers/engines.controller')

router.get('/', getEngines);

router.post('/', createEngine);

router.put('/', updateEngine);

router.delete('/', deleteEngine);

router.get('/:id/:name', filterEngine)

module.exports = router;