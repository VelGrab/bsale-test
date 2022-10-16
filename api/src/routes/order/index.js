const express = require("express");
const router = express.Router();
const {
  getProductsOrderAsc,
  getProductsOrderDesc,
} = require("../../controllers/product_controller");

router.get("/asc", async (req, res) => {
  try {
    const response = await getProductsOrderAsc();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/desc", async (req, res) => {
  try {
    const response = await getProductsOrderDesc();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
