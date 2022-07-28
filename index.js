/**
 *
 * Number API
 * An API built around numbers
 */

// importing packages
const express = require('express');
const app = express();
const number = require('./routes/number');
const even = require('./routes/even');

// middlewares
app.use(express.json());

// adding routes
app.get('/', (req, res) => {
    const welcome = {
        msg: 'Welcome to the Number API',
        endpoints: ['/number', '/even'],
    };

    res.json(welcome);
});
app.use('/number', number);
app.use('/even', even);

// port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
