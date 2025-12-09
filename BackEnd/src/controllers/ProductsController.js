const Products = require("../models/Products");
const ProductCategory = require("../models/ProductCategory");
const HastSlug = require("../utils/slugHelper");
const slugify = require("slugify");

const ProductsController = {

    /**
     * GET: Lấy TẤT CẢ sản phẩm (tùy chọn phân trang và populate)
     */
    getAllProducts: async (req, res) => {
        try {
            // Lấy tham số phân trang từ query
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;

            const products = await Products.find({})
                .skip(skip)
                .limit(limit)
                .populate("category", "title path") // Populate thông tin danh mục
                .exec();

            const totalProducts = await Products.countDocuments();

            res.status(200).json({
                products,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit),
                totalProducts,
            });
        } catch (error) {
            console.error("Error in getAllProducts:", error);
            res.status(500).json({ error: "Server error during fetch all products", details: error.message });
        }
    },

    //---------------------------------------------------------

    // Get all product titles
    GetProductsByCategory: async (req, res) => {
        try {
            // Nên lấy category_title từ req.params hoặc req.query cho phương thức GET
            const category_title = req.query.category_title || req.body.category_title;

            if (!category_title) {
                return res.status(400).json({ error: "Category title is required." });
            }

            const category = await ProductCategory.findOne({ title: category_title.trim() });

            if (!category) {
                return res.status(404).json({ error: "Category not found" });
            }

            // Tìm sản phẩm và populate category (tùy chọn)
            const products = await Products.find({ category: category._id }).populate("category", "title");

            res.status(200).json(products);
        } catch (error) {
            console.error("Error in GetProductsByCategory:", error);
            res.status(500).json({ error: "Server error during category product fetch", details: error.message });
        }
    },

    //---------------------------------------------------------

    // Get product by id or slug 
    GetProductById: async (req, res) => {
        try {
            const { slug } = req.params;
            // Sử dụng slug đã được chuẩn hóa để tìm kiếm
            const product = await Products.findOne({ slug: HastSlug(slug) }).populate("category", "title path");

            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json(product);
        } catch (error) {
            console.error("Error in GetProductById:", error);
            res.status(500).json({ error: "Server error during product fetch", details: error.message });
        }
    },

    //---------------------------------------------------------

    /**
     * POST: Đăng ký sản phẩm mới (Có tự động gán product_id tăng dần theo Category)
     */
    RegisterProducts: async (req, res) => {
        try {
            const {
                // product_id, // Loại bỏ product_id khỏi req.body để tự động gán
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

            // 1. Kiểm tra dữ liệu bắt buộc
            if (!product_name || !category_title) {
                return res.status(400).json({ error: "Product name and category title are required." });
            }

            // 2. Tìm Category
            const category = await ProductCategory.findOne({ title: category_title.trim() });
            if (!category) {
                return res.status(404).json({ error: `Category "${category_title}" not found.` });
            }

            // 3. Xử lý logic Product ID (Tăng dần theo Category)
            const lastProduct = await Products.findOne({ category: category._id })
                .sort({ product_id: -1 })
                .select('product_id'); // Chỉ lấy trường product_id

            const newProductId = lastProduct ? lastProduct.product_id + 1 : 1;

            // 4. Tạo slug
            const slug = slugify(product_name, { lower: true, locale: 'vi' });

            // 5. Tạo và lưu sản phẩm mới
            const newProduct = new Products({
                product_id: newProductId, // <-- Gán ID tự động
                product_name: product_name.trim(),
                product_img,
                product_img_array,
                product_price,
                description,
                description_child,
                introduce_produce,
                Condition,
                slug: HastSlug(slug), // Đảm bảo slug được chuẩn hóa
                category: category._id
            });

            await newProduct.save();
            res.status(201).json({ message: "Product registered successfully", newProduct });
        } catch (error) {
            // Xử lý lỗi trùng lặp slug (nếu có unique index)
            if (error.code && error.code === 11000) {
                return res.status(409).json({ error: "Product name (slug) already exists." });
            }
            console.error("Error in RegisterProducts:", error);
            res.status(500).json({ error: "Server error during product registration", details: error.message });
        }
    },

    //---------------------------------------------------------

    // Delete product by slug
    DeleteProductById: async (req, res) => {
        try {
            const { slug } = req.params;
            const { check } = req.body; // Trường check này nên là boolean

            if (check !== true) { // Chỉ chấp nhận boolean true
                return res.status(400).json({ message: "Deletion confirmation ('check' field) is required." });
            }

            // Dùng findOneAndDelete để đảm bảo hàm xóa được trigger (nếu có middleware)
            const product = await Products.findOneAndDelete({ slug: HastSlug(slug) });

            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json({ message: `Product "${product.product_name}" deleted successfully.`, product });
        } catch (error) {
            console.error("Error in DeleteProductById:", error);
            res.status(500).json({ error: "Server error during product deletion", details: error.message });
        }
    },

    //---------------------------------------------------------

    // Delete All Products
    DeleteAllProducts: async (req, res) => {
        try {
            const { confirm } = req.body;

            // Kiểm tra confirm là boolean true
            if (confirm !== true) {
                return res.status(400).json({ message: "Explicit confirmation ('confirm': true) is required to delete all products." });
            }

            const result = await Products.deleteMany();

            if (result.deletedCount === 0) {
                return res.status(200).json({ message: "Products already empty." });
            }

            res.status(200).json({
                message: "All Products deleted successfully.",
                deletedCount: result.deletedCount,
            });
        } catch (error) {
            console.error("Error in DeleteAllProducts:", error);
            res.status(500).json({ error: "Server error during mass deletion", details: error.message });
        }
    },

    //---------------------------------------------------------

    // Update product by slug
    UpdateProductsBySlug: async (req, res) => {
        try {
            const { slug } = req.params;
            let updatedData = req.body;

            // Xử lý cập nhật slug nếu product_name được thay đổi
            if (updatedData.product_name) {
                const newSlug = slugify(updatedData.product_name, { lower: true, locale: 'vi' });
                updatedData.slug = HastSlug(newSlug);
            }

            // Xử lý cập nhật category nếu category_title được thay đổi
            if (updatedData.category_title) {
                const category = await ProductCategory.findOne({ title: updatedData.category_title.trim() });
                if (!category) {
                    return res.status(404).json({ error: `Category "${updatedData.category_title}" not found. Cannot update category.` });
                }
                updatedData.category = category._id;
                delete updatedData.category_title; // Xóa trường tạm
            }

            const updatedProduct = await Products.findOneAndUpdate(
                { slug: HastSlug(slug) },
                updatedData,
                { new: true, runValidators: true } // runValidators: chạy kiểm tra schema như unique, required
            ).populate("category", "title path");

            if (!updatedProduct) {
                return res.status(404).json({ message: `Product with slug "${slug}" not found.` });
            }

            res.status(200).json({
                message: "Product updated successfully",
                product: updatedProduct,
            });
        } catch (error) {
            if (error.code && error.code === 11000) {
                return res.status(409).json({ error: "Product name (slug) already exists." });
            }
            console.error("Update error:", error);
            res.status(500).json({ error: "Server error during update", details: error.message });
        }
    },


};

module.exports = ProductsController;