const express = require('express');

const { usersRouter } = require('./routes/users.router');
const { tasksRouter } = require('./routes/tasks.router');

const app = express();

app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/tasks', tasksRouter);

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exist in our server`,
    });
});

module.exports = { app };
