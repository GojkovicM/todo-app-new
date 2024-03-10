const express = require('express');
const router = express.Router();                                                //The router instance allows you to define and organize routes for handling specific HTTP requests
const tasksController = require('../controllers/tasksController');

router.get('/:userId', tasksController.getTasksByUserId);
router.post('/', tasksController.createTask);
router.put('/:taskId', tasksController.updateTask);
router.delete('/:taskId', tasksController.deleteTask);

module.exports = router;