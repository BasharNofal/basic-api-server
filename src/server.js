'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFoundHandler = require('./error-handlers/404.js');
const serverErrorHandler = require('./error-handlers/500.js');
const clothesRouter = require('./routes/clothes.js');
const foodRouter = require('./routes/food.js');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v2/clothes/', clothesRouter);
app.use('/api/v2/foods/', foodRouter);
app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
    server:app,
    start:(port) => {
        const PORT = port;
        app.listen(PORT, () => {
            console.log('server is running on port', PORT);
        });
    }
};