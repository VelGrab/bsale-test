const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  getProductsByCategory,
} = require("../../controllers/category_controller");

/* This is a route handler. It is a function that is called when a request is made to the specified
route. */
router.get("/", async (req, res) => {
  try {
    const response = await getAllCategories();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* This is a route handler. It is a function that is called when a request is made to the specified
route. */
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getProductsByCategory(id);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
