const express = require("express");
const productRoutes = require("./routes/productRoutes");
const adRoutes = require("./routes/adRoutes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use("/ads", adRoutes);

module.exports = app;
