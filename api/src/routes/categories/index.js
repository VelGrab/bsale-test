const express = require("express");
const router = express.Router();
const { Category } = require("../../../db");

router.get("/", async (req, res) => {
  try {
    const response = await Category.findAll({});
    res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
