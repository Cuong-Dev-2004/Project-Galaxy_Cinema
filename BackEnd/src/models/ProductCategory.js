// models/ProductCategory.js
const mongoose = require("mongoose");

const ProductCategory = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    path: {
        type: String,
        default: "/Products",
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("ProductCategory", ProductCategory);
