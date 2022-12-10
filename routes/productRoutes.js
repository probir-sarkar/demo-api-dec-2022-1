const express = require("express");

const {
  getAllProducts,
  compareProducts,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/compare").get(compareProducts);

module.exports = router;
