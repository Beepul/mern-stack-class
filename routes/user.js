const express = require('express');
const userController = require('../controller/user');
// server.CRUD is in top level which is not preferable so we have to create router use it and router.CRUD
const router = express.Router();

router
    .post('/', userController.createUser)
    .get('/' , userController.getAllUsers)
    .get('/:id' , userController.getUserById)
    .put('/:id' , userController.replaceUser)
    .patch('/:id' , userController.updateUser )
    .delete('/:id' , userController.deleteUser)

exports.routes = router;