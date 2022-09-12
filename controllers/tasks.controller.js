const { Task } = require('../models/task.model');
const { User } = require('../models/user.model');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'name'],
                },
            ],
        });

        res.status(200).json({
            status: 'succes',
            data: { tasks },
        });
    } catch (error) {
        console.log(error);
    }
};

const createTask = async (req, res) => {
    try {
        const { title, userId, startDate, limitDate } = req.body;
        const date = new Date()
        const newTask = await Task.create({
            title,
            userId,
            startDate: date.toDateString(),
            limitDate,
        });
        res.status(200).json({
            status: 'success',
            data: { newTask },
        });
    } catch (error) {}
};

const taskUserId = async (req, res) => {
    try {
        const { status } = req.params;
        const task = await Task.findAll({
            where: { status },
            include: [
                {
                    model: User,
                    attributes: ['id', 'name'],
                },
            ],
        });

        res.status(200).json({
            status: 'success',
            data: { task },
        });
    } catch (error) {
        console.log(error);
    }
};

const updateTask = async (req, res) => {
    try {
        const { status, finishDate } = req.body;
        const { task } = req;
        const { limitDate } = task;

        const date1 = new Date(finishDate);
        const date2 = new Date(limitDate);

        if (date1 < date2) {
            await task.update({ finishDate, status: 'completed' });
        } else {
            await task.update({ finishDate, status: 'late' });
        }

        return res.status(200).json({
            status: 'succes',
            data: { task },
        });
    } catch (error) {
        console.log(error);
    }
};
const deleteTask = async (req, res) => {
    try {
        const { task } = req;

        await task.update({ status: 'cancelled' });

        res.status(204).json({
            status: 'success',
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllTasks,
    createTask,
    taskUserId,
    updateTask,
    deleteTask,
};
