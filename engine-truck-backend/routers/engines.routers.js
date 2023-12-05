const express = require('express');
const router = express.Router();
const {getEngines, createEngine, updateEngine, deleteEngine} = require('../controllers/engines.controller');
const validateEngine = require('../request/engine.request');
const verifyToken = require('../middlewares/auth.jwt.middleware');

router.get('/', getEngines);

router.post('/', verifyToken, validateEngine, createEngine);

router.put('/:id', /*verifyToken,*/ updateEngine);

router.delete('/:id', verifyToken, deleteEngine);

module.exports = router;