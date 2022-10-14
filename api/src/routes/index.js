const { Router } = require("express");
const router = Router();

var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const productRoute = require("./products/index");
const categoryRoute = require("./categories/index");

router.use("/products", productRoute);
router.use("/category", categoryRoute);

module.exports = router;