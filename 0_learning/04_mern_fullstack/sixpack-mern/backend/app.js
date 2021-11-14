const express = require('express');

// own imports
const errorMiddleware = require("./middleware/error");

const app = express();

app.use(express.json());

// route imports 
const product = require('./routes/productRoute');

app.use('/api/v1',product);

// middleware for errors
app.use(errorMiddleware);


module.exports = app;