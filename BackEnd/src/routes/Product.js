const router = require("express").Router();
const ProductController = require("../controllers/ProductsController");

router.post("/RegisterProduct", ProductController.RegisterProducts);
router.get("/GetProductsByCategory", ProductController.GetProductsByCategory);
router.get("/:slug", ProductController.GetProductById);
router.delete("/:slug", ProductController.DeleteProductById);
router.delete("/", ProductController.DeleteAllProducts);



module.exports = router;