const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: [true, "An ad must have an id"],
    unique: true,
  },
  companyId: {
    type: Number,
  },
  primaryText: {
    type: String,
  },
  headline: {
    type: String,
  },
  description: {
    type: String,
  },
  CTA: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Ads = mongoose.model("ads", adSchema);
module.exports = Ads;
