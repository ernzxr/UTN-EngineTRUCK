const express = require('express');
const router = express.Router();
const { getBrands, deleteBrand, updateBrand, createBrand } = require('../controllers/brands.controller');
const validateBrand = require('../request/brand.request');
const verifyToken = require('../middlewares/auth.jwt.middleware');

router.get('/', getBrands);

router.post('/', verifyToken, validateBrand, createBrand);

router.put('/:id', verifyToken, updateBrand);

router.delete('/:id', verifyToken, deleteBrand);

module.exports = router;