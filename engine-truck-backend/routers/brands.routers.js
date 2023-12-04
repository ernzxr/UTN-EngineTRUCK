const express = require('express');
const router = express.Router();
const { getBrands, deleteBrand, updateBrand, createBrand } = require('../controllers/brands.controller');
const validateBrand = require('../request/brand.request');

router.get('/', getBrands);

router.post('/', validateBrand, createBrand);

router.put('/:id', updateBrand);

router.delete('/:id', deleteBrand);

module.exports = router;