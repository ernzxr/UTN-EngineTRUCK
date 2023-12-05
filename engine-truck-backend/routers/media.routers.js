const express = require('express');
const router = express.Router();
const { getMedia, createMedia, updateMedia, deleteMedia } = require('../controllers/media.controller');
const validateMedia = require('../request/media.request');
const uploadSingleFile = require('../middlewares/uploadSingleFile');

router.get('/', getMedia);

router.post('/', /*validateMedia,*/ uploadSingleFile.single("file"), createMedia);

router.put('/:id', /*validateMedia,*/ uploadSingleFile.single("file"), updateMedia);

router.delete('/:id', deleteMedia);

module.exports = router;