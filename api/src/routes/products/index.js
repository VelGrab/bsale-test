const express = require("express");
const router = express.Router();
const { Product } = require("../../../db");


router.get('/', async (req, res) => {
    try {
        const response = await Product.findAll();
        res.json(response)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})


module.exports = router;