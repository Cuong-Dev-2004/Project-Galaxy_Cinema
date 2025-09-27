
const ProductCategory = require("../models/ProductCategory")




const ProductCategoryController = {
    // Get/Get All title của Product Category
    RenderTitleProduct: async (req, res) => {
        try {
            const categories = await ProductCategory.find({}, 'title');
            res.status(200).json(categories)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //  Post/Register Product Category
    RegisterProducts: async (req, res) => {
        try {
            const { title } = req.body;

            if (!title || title.trim() === "") {
                return res.status(400).json({ error: "Title is required" });
            }
            const productCategory = new ProductCategory({
                title: title.trim()
            });
            await productCategory.save();
            res.status(200).json(productCategory);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Post/Changer Products 
    UpdateCategoryTitle: async (req, res) => {
        try {
            const { oldTitle, newTitle } = req.body;

            if (!oldTitle || !newTitle || newTitle.trim() === "") {
                return res.status(400).json({ error: "Both oldTitle and newTitle are required" });
            }

            const updated = await ProductCategory.findOneAndUpdate(
                { title: oldTitle },
                { title: newTitle.trim() },
                { new: true }
            );

            if (!updated) {
                return res.status(404).json({ error: "Category not found" });
            }

            res.status(200).json({ message: "Title updated successfully", updated });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Post/Delete 
    DeleteItemTitleProduct: async (req, res) => {
        try {
            const { title } = req.body;

            if (!title || title.trim() === "") {
                return res.status(400).json({ error: "Title is required" });
            }

            const result = await ProductCategory.deleteOne({ title: title.trim() });

            if (result.deletedCount === 0) {
                return res.status(404).json({ error: "Category not found" });
            }

            res.status(200).json({ message: "Category deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // POST: Xóa category nếu có sản phẩm kèm xác nhận
    DeleteCategoryWithProducts: async (req, res) => {
        try {
            const { title, confirmDelete } = req.body;

            if (!title || title.trim() === "") {
                return res.status(400).json({ error: "Title is required" });
            }

            const category = await ProductCategory.findOne({ title: title.trim() });
            if (!category) {
                return res.status(404).json({ error: "Category not found" });
            }

            const relatedProducts = await ProductModel.find({ category: category._id });

            // Nếu có sản phẩm mà chưa xác nhận thì thông báo
            if (relatedProducts.length > 0 && !confirmDelete) {
                return res.status(200).json({
                    message: "Category has products. Confirm deletion?",
                    productCount: relatedProducts.length,
                    confirmRequired: true
                });
            }

            // Nếu xác nhận rồi, thì xóa sản phẩm trước
            if (relatedProducts.length > 0 && confirmDelete) {
                await ProductModel.deleteMany({ category: category._id });
            }

            // Xóa category
            await ProductCategory.deleteOne({ _id: category._id });

            res.status(200).json({
                message: `Deleted category "${title}" and ${relatedProducts.length} related products.`
            });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    DeleteAllTiemProducts: async (req, res) => {
        try {
            await ProductCategory.deleteMany({});
            res.status(200).json({ message: "All items deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}


module.exports = ProductCategoryController;