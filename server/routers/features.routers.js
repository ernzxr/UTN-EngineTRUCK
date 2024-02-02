const express = require('express');
const router = express.Router();
const {getFeatures, createFeature, updateFeature, deleteFeature} = require('../controllers/features.controller');
const validateFeature = require('../request/feature.request');
const verifyToken = require('../middlewares/auth.jwt.middleware');

router.get('/', getFeatures);

router.post('/', verifyToken, validateFeature, createFeature);

router.put('/:id', verifyToken, updateFeature);

router.delete('/:id', verifyToken, deleteFeature);

module.exports = router;