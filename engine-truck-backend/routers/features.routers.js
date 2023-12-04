const express = require('express');
const router = express.Router();
const {getFeatures, createFeature, updateFeature, deleteFeature} = require('../controllers/features.controller');
const validateFeature = require('../request/feature.request');

router.get('/', getFeatures);

router.post('/', validateFeature, createFeature);

router.put('/:id', updateFeature);

router.delete('/:id', deleteFeature);

module.exports = router;