const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: [true, "A company must have an id"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "A company must have a name"],
  },
  url: {
    type: String,
    required: [true, "A company must have a url"],
  },
});

const Companies = mongoose.model("companies", companySchema);
module.exports = Companies;
