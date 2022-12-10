const Ads = require("../models/adModel");
const Companies = require("../models/companiesModel");

exports.getAllAds = async (req, res) => {
  try {
    const query = req.query;
    const ads = await Ads.find();
    res.status(200).json({
      status: "success",
      results: ads.length,
      data: {
        ads,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// join the ads "companyId" fields with the companies "_id" field using the $lookup operator
// https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
exports.getAllAdsAndCompanies = async (req, res) => {
  try {
    let { query } = req.query;
    query = query.trim();
    let ads = await Ads.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
        },
      },
      {
        $unwind: {
          path: "$company",
        },
      },
      {
        $match: {
          $or: [
            { primaryText: { $regex: query, $options: "i" } },
            { headline: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
            { "company.name": { $regex: query, $options: "i" } },
          ],
        },
      },
    ]);
    res.status(200).json({
      status: "success",
      results: ads.length,
      data: {
        ads,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
