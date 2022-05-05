const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get data success",
        });
    } catch (error) {
        console.error(error)
        return res.status(500).send("Server error")
    }
});

module.exports = router;