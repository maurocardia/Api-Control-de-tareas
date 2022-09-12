const express = require('express');

const {
    getAllTasks,
    createTask,
    taskUserId,
    updateTask,
    deleteTask,
} = require('../controllers/tasks.controller');
const { taskExists, statusExist } = require('../middlewares/task.middlewere');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);

tasksRouter.get('/:status', statusExist, taskUserId);

tasksRouter.post('/', createTask);

tasksRouter.patch('/:id', taskExists, updateTask);

tasksRouter.delete('/:id', taskExists, deleteTask);

module.exports = { tasksRouter };
