const { Task } = require('../models/task.model');
const { User } = require('../models/user.model');

const initModels = () => {
    User.hasMany(Task, { foreignKey: 'userId' });
    Task.belongsTo(User);

    Task.hasMany(User, { foreignKey: 'id' });
    User.belongsTo(User);
};

module.exports = { initModels };    