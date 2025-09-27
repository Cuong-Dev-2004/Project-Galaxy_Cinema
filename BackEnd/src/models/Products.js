const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    product_name: {
        type: String,
        required: true,
        unique: true,
    },
    product_img: {
        type: String,
        required: true,

    },
    product_img_array: {
        type: [String],
        default: [],
    },
    product_price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    description_child: {
        type: String,
        required: true,

    },
    introduce_produce: {
        type: [String],
        default: [],
    },
    Condition: [
        {
            Condition_title: {
                type: String,
            },
            Condition_TERMS: {
                type: [String],
                default: [],
            },
        },
    ],
    slug: { type: String, required: true, unique: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductCategory",
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Products", productSchema);
