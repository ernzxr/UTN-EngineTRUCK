const express = require('express');
const router = express.Router();
const {getUsers, createUser, updateUser, deleteUser, filterUser} = require('../controllers/users.controller');
const validateUser = require('../request/user.request');

router.get('/', getUsers);

router.post('/',validateUser, createUser);

router.put('/', updateUser);

router.delete('/:id', deleteUser);

router.get('/:id/:name', filterUser)

module.exports = router;