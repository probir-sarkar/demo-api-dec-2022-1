const express = require("express");

const {
  getAllAds,
  getAllAdsAndCompanies,
} = require("../controllers/adController");

const router = express.Router();

router.route("/").get(getAllAdsAndCompanies);
// router.route("/companies").get(getAllAdsAndCompanies);
module.exports = router;
