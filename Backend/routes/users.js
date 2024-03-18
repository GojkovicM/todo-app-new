const express = require('express');
const router = express.Router();                                              //The router instance allows you to define and organize routes for handling specific HTTP requests
const usersController = require('../controllers/usersController');

router.post('/login', usersController.login);                              //When a POST request is made to one of these endpoints, the corresponding function from the usersController, 
router.post('/register', usersController.register);                         //module will be invoked to handle the request.
router.delete('/:userID', usersController.deleteUser)

module.exports = router;