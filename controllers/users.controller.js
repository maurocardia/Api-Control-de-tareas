const { User } = require('../models/user.model');
const { Task } = require('../models/task.model');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: { status: 'active' },

            include: [
                {
                    model: Task,
                    attributes:["id","title","limitDate","startDate","finishDate","status"]
                },
            ],
        });

        res.status(200).json({
            status: 'success',
            data: { users },
        });
    } catch (error) {
        console.log(error);
    }
};
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = await User.create({ name, email, password });

        res.status(201).json({
            status: 'success',
            data: { newUser },
        });
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const { user } = req;

        await user.update({ name, email });

        res.status(200).json({
            status: 'success',
            data: { user },
        });
    } catch (error) {}
};

const deleteUser = async (req, res) => {
    try {
        const { user } = req;

        await user.update({ status: 'inactive' });

        res.status(204).json({
            status: 'uccess',
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
};
