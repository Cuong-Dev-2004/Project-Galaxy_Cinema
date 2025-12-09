const routes = require("express").Router();
const ProductCategoryController = require("../controllers/ProductCategoryController");

// GET /categories
// Lấy tất cả tên danh mục
routes.get("/", ProductCategoryController.getAllCategoryTitles);

// POST /categories
// Tạo mới một danh mục
routes.post("/", ProductCategoryController.createCategory);

// PATCH /categories/:oldTitle
// Cập nhật tên danh mục
routes.patch("/:oldTitle", ProductCategoryController.updateCategoryTitle);



// DELETE /categories/:title
// Xóa một danh mục bằng title (không cần xác nhận sản phẩm)
routes.delete("/:title", ProductCategoryController.deleteCategoryByTitle);



module.exports = routes;
