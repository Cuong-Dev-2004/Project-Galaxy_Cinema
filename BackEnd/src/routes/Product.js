const router = require("express").Router();
const ProductController = require("../controllers/ProductsController");

// Route GET TẤT CẢ SẢN PHẨM (có thể kèm phân trang)
router.get("/", ProductController.getAllProducts);

// Route GET: Lấy sản phẩm theo tên danh mục (Dùng Query Parameter)
// Ví dụ: GET /products/category?category_title=Anh%20Trai%20Vượt%20Ngàn%20Chông%20Gai
router.get("/category", ProductController.GetProductsByCategory);

// ✅ KHẮC PHỤC: Thêm route cho phép lấy sản phẩm bằng tên danh mục trong URL (Dùng Params)
// Ví dụ: GET /products/category/:title
router.get("/category/:category_title", ProductController.GetProductsByCategory);


// Lấy sản phẩm chi tiết bằng slug
router.get("/:slug", ProductController.GetProductById);

// POST: Đăng ký sản phẩm mới
router.post("/", ProductController.RegisterProducts);

// PUT/PATCH: Cập nhật sản phẩm bằng slug
router.patch("/:slug", ProductController.UpdateProductsBySlug);

// DELETE: Xóa sản phẩm bằng slug (Yêu cầu xác nhận trong body)
router.delete("/:slug", ProductController.DeleteProductById);

// DELETE: Xóa TẤT CẢ sản phẩm (Yêu cầu xác nhận trong body)
router.delete("/all", ProductController.DeleteAllProducts);

module.exports = router;
