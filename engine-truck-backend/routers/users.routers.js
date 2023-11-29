const express = require('express');
const router = express.Router();
const {getUsers, createUser, updateUser, deleteUser, filterUser} = require('../controllers/users.controller')

router.get('/', getUsers);

router.post('/', createUser);

router.put('/', updateUser);

router.delete('/', deleteUser);

router.get('/:id/:name', filterUser)

module.exports = router;