const dotenv = require('dotenv');

const { app } = require('./app');

const { initModels } = require('./models/initModels');

const { db } = require('./utils/dataBase.utils');

dotenv.config({ path: './config.env' });

const startServer = async () => {
    try {
        await db.authenticate();
        initModels();
        await db.sync();

        const PORT = 4000;

        app.listen(PORT, () => {
            console.log('Express app runing!');
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
