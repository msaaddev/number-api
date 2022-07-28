// importing packages
const express = require('express');
const router = express.Router();

router.get(`/`, function (req, res) {
    const number = [];

    for (let i = 0; i < 100; i++) {
        number.push(i);
    }

    res.status(200).json(number);
});

module.exports = router;
