const express = require('express');
const router = express.Router();
const {getFeatureDetails, createFeatureDetail, updateFeatureDetail, deleteFeatureDetail} = require('../controllers/feature_details.controller');
const validateFeatureDetail = require('../request/feature_detail.request');
const verifyToken = require('../middlewares/auth.jwt.middleware');

router.get('/', getFeatureDetails);

router.post('/', verifyToken, validateFeatureDetail, createFeatureDetail);

router.put('/:id', verifyToken, updateFeatureDetail);

router.delete('/:id', verifyToken, deleteFeatureDetail);

module.exports = router;
