const ProductCategory = require("../models/ProductCategory");
// Import Model Sản phẩm thực tế để quản lý mối quan hệ
const Products = require("../models/Products");


const CategoryController = {

    /**
     * GET: Lấy tất cả tên danh mục sản phẩm (chỉ lấy trường title)
     */
    getAllCategoryTitles: async (req, res) => {
        try {
            // Chỉ chọn trường 'title'
            const categories = await ProductCategory.find({});
            res.status(200).json(categories);
        } catch (error) {
            console.error("Error fetching category titles:", error);
            res.status(500).json({ error: "Server error during fetch", details: error.message });
        }
    },

    /**
     * POST: Tạo mới một danh mục sản phẩm
     */
    createCategory: async (req, res) => {
        try {
            const { title, path } = req.body;

            if (!title || title.trim() === "") {
                return res.status(400).json({ error: "Title is required and cannot be empty." });
            }

            const newCategory = await ProductCategory.create({
                title: title.trim(),
                path: path.trim()
            });

            res.status(201).json(newCategory);

        } catch (error) {
            if (error.code && error.code === 11000) {
                return res.status(409).json({ error: "This category title already exists." });
            }
            console.error("Error creating category:", error);
            res.status(500).json({ error: "Server error during creation", details: error.message });
        }
    },


    updateCategoryTitle: async (req, res) => {
        try {
            const oldTitle = req.params.oldTitle || req.body.oldTitle;
            const { newTitle } = req.body;


            if (!oldTitle || !newTitle || newTitle.trim() === "") {
                return res.status(400).json({ error: "Both oldTitle and newTitle are required." });
            }

            const updated = await ProductCategory.findOneAndUpdate(
                { title: oldTitle.trim() },
                { title: newTitle.trim() },
                { new: true, runValidators: true }
            );

            if (!updated) {
                return res.status(404).json({ error: `Category with title "${oldTitle}" not found.` });
            }

            res.status(200).json({ message: "Category title updated successfully.", updated });

        } catch (error) {
            if (error.code && error.code === 11000) {
                return res.status(409).json({ error: `New title "${req.body.newTitle}" already exists.` });
            }
            console.error("Error updating category:", error);
            res.status(500).json({ error: "Server error during update", details: error.message });
        }
    },

    /**
     * DELETE: Xóa một danh mục chỉ bằng title (Lấy title từ req.params theo route DELETE /categories/:title)
     */
    deleteCategoryByTitle: async (req, res) => {
        try {
            const { title } = req.params;

            if (!title || title.trim() === "") {
                return res.status(400).json({ error: "Title is required for deletion." });
            }

            const result = await ProductCategory.deleteOne({ title: title.trim() });

            if (result.deletedCount === 0) {
                return res.status(404).json({ error: `Category with title "${title}" not found.` });
            }

            res.status(200).json({ message: `Category "${title}" deleted successfully.` });
        } catch (error) {
            console.error("Error deleting category by title:", error);
            res.status(500).json({ error: "Server error during deletion", details: error.message });
        }
    }
}


module.exports = CategoryController;
