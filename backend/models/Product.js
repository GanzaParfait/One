const mongoose = require("mongoose");

// Our Schema
const productSchema = new mongoose.Schema({
    productCode: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    date: { type: Date, required: true }
});


// Then we export model
module.exports = mongoose.model("Product", productSchema)
