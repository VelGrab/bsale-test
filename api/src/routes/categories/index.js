const express = require("express");
const router = express.Router();
const { getAllCategories, getProductsByCategory } = require("../../controllers/category_controller");

router.get("/", async (req, res) => {
  try {
    const response = await getAllCategories();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getProductsByCategory(id);
    res.status(200).json(response);
  }
  catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
