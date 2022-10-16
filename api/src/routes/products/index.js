const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductsByNames,
} = require("../../controllers/product_controller");

/* This is a route handler. It is a function that is called when a request is made to the route. */
router.get("/", async (req, res) => {
  try {
    const response = await getAllProducts();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* This is a route handler. It is a function that is called when a request is made to the route. */
router.get("/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const response = await getProductsByNames(name);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
