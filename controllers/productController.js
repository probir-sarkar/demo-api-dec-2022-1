const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const query = req.query;
    let products = [];
    if (query.id) {
      products = await Product.find({ id: query.id });
    } else {
      products = await Product.find();
    }

    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.compareProducts = async (req, res) => {
  try {
    console.log(req.query);
    const queryObj = req.query;
    const productIds = queryObj.productsIds;
    const productsToCompare = await Product.find({
      id: { $in: productIds },
    });
    if (productsToCompare.length < 2) {
      throw new Error("Please select at least two products to compare");
    } else if (productsToCompare.length > 3) {
      throw new Error("Please select at most three products to compare");
    }

    console.log(productsToCompare);
    res.status(200).json({
      status: "success",
      results: productsToCompare.length,
      data: {
        productsToCompare,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
