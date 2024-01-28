const express = require('express');
const router = express.Router();
const {getFeatureDetails, createFeatureDetail, updateFeatureDetail, deleteFeatureDetail} = require('../controllers/feature_details.controller');
const validateFeatureDetail = require('../request/feature_detail.request');

router.get('/', getFeatureDetails);

router.post('/', validateFeatureDetail, createFeatureDetail);

router.put('/:id', updateFeatureDetail);

router.delete('/:id', deleteFeatureDetail);

module.exports = router;
