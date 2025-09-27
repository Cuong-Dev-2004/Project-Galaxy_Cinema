const Products = require("../models/Products");
const ProductCategory = require("../models/ProductCategory");
const HastSlug = require("../utils/slugHelper");
const slugify = require("slugify");

const ProductsController = {
    // Get all product titles
    GetProductsByCategory: async (req, res) => {
        try {
            const { category_title } = req.body;


            const category = await ProductCategory.findOne({ title: category_title });

            if (!category) {
                return res.status(404).json({ error: "Category not found" });
            }
            const products = await Products.find({ category: category._id });

            res.status(200).json(products);
        } catch (error) {
            console.error("Error in GetProductsByCategory:", error);
            res.status(500).json({ error: error.message });
        }
    },
    // Get product by id or slug 
    GetProductById: async (req, res) => {
        try {
            const { slug } = req.params;
            const product = await Products.findOne({ slug: HastSlug(slug) }).populate("category");

            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    // Register new product
    RegisterProducts: async (req, res) => {
        try {
            const {
                product_id,
                product_name,
                product_img,
                product_img_array,
                product_price,
                description,
                description_child,
                introduce_produce,
                Condition,
                category_title
            } = req.body;

            // Find category by title
            const category = await ProductCategory.findOne({ title: category_title });
            if (!category) {
                return res.status(404).json({ error: "Category not found" });
            }
            const slug = slugify(product_name, { lower: true });
            // Create and save new product
            const newProduct = new Products({
                product_id,
                product_name,
                product_img,
                product_img_array,
                product_price,
                description,
                description_child,
                introduce_produce,
                Condition,
                slug,
                category: category._id
            });

            await newProduct.save();
            res.status(200).json({ message: "Product registered successfully", newProduct });
        } catch (error) {
            console.error("Error in RegisterProducts:", error);
            res.status(500).json({ error: error.message });
        }
    },
    // Delete product by id
    DeleteProductById: async (req, res) => {
        try {
            const { slug } = req.params;
            const { check } = req.body;

            if (!check) {
                return res.status(404).json({ message: "Not confirm verify" })
            }
            const product = await Products.findOneAndDelete({ slug: HastSlug(slug) });
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ message: "Product deleted successfully", product });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Delete All Products
    DeleteAllProducts: async (req, res) => {
        try {
            console.log("req.body:", req.body);
            const { confirm } = req.body;
            console.log("confirm:", confirm);
            if (confirm !== true && confirm !== "true") {
                return res.status(400).json({ message: "Not confirm verify" });
            }


            const count = await Products.countDocuments();
            if (count === 0) {
                return res.status(400).json({ message: "Products Empty" });
            }

            const result = await Products.deleteMany();
            res.status(200).json({
                message: "All Products deleted successfully",
                deletedCount: result.deletedCount,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    UpdateProductsBySlug: async (req, res) => {
        try {
            const { slug } = req.params;
            const updatedData = req.body;

            const updatedProduct = await Products.findOneAndUpdate(
                { slug: HastSlug(slug) },
                updatedData,
                { new: true }
            );

            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json({
                message: "Product updated successfully",
                product: updatedProduct,
            });
        } catch (error) {
            console.error("Update error:", error);
            res.status(500).json({ error: error.message });
        }
    },


};

module.exports = ProductsController;
