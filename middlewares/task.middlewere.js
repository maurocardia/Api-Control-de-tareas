/*const { Task } = require('../models/task.model');

const taskExists = async (req, res, next) => {
    try {
        const { id } = req.params;

        const task = await Task.findOne({ where: { id } });

        if (!task) {
            return res.status(404).json({
                status: 'error',
                message: 'task no found',
            });
        }

        req.task = task;
        next();
    } catch (error) {
        console.log(error);
    }
};
const statusExist = async (req, res, next) => {
    try {
        const { status } = req.params;

        const task = await Task.findOne({ where: { status } });

        if (
            status === 'active' ||
            status === 'cancelled' ||
            status === 'completed' ||
            status === 'late'
        ) {
            req.task = task;
            next();
        } else {
            res.status(404).json({
                status: 'error',
                message: 'status no exists',
            });
        }
    } catch (error) {}
};

module.exports = { taskExists, statusExist };*/
