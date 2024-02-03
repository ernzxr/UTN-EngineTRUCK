const express = require('express');
const router = express.Router();
const { getMedia, createMedia, updateMedia, deleteMedia } = require('../controllers/media.controller');
const validateMedia = require('../request/media.request');
const uploadSingleFile = require('../middlewares/upload.single.middleware');
const verifyToken = require('../middlewares/auth.jwt.middleware');

router.get('/', getMedia);

router.post('/', verifyToken, /*validateMedia,*/ uploadSingleFile.single("file"), createMedia);

router.put('/:id', verifyToken, /*validateMedia,*/ uploadSingleFile.single("file"), updateMedia);

router.delete('/:id', verifyToken, deleteMedia);

module.exports = router;