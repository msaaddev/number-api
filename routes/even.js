// importing packages
const express = require('express');
const router = express.Router();

router.post(`/`, function (req, res) {
    const number = req.query.number || null;

    if (number === null) {
        res.status(400).json({
            message: 'Please provide a number',
        });
    }

    if (number % 2 === 0) {
        res.status(200).json({ isEven: true });
    }

    res.status(200).json({ isEven: false });
});

module.exports = router;
