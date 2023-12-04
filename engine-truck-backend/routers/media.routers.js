const express = require('express');
const router = express.Router();
const { getMedia, createMedia, updateMedia, deleteMedia } = require('../controllers/media.controller');
const validateMedia = require('../request/media.request');

router.get('/', getMedia);

router.post('/', validateMedia, createMedia);

router.put('/:id', updateMedia);

router.delete('/:id', deleteMedia);

module.exports = router;