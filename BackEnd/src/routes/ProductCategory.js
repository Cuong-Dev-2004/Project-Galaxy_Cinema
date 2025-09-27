const routes = require("express").Router();
const ProductCategoryController = require("../controllers/ProductCategoryController");

routes.get("/", ProductCategoryController.RenderTitleProduct);
routes.post("/RegisterProducts", ProductCategoryController.RegisterProducts);
routes.post("/UpdateCategoryTitle", ProductCategoryController.UpdateCategoryTitle);
routes.post("/DeleteItemTitleProduct", ProductCategoryController.DeleteItemTitleProduct);
routes.post("/DeleteCategoryWithProducts", ProductCategoryController.DeleteCategoryWithProducts);
routes.post("/DeleteAllTiemProducts", ProductCategoryController.DeleteAllTiemProducts);
module.exports = routes;