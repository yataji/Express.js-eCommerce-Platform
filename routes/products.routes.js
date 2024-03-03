const express = require("express");
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controllers");
const { upload } = require("../middleware/multer.middleware");
const Routes = express.Router();

Routes.get("/", getProducts);
Routes.get("/:id", getProductById);
Routes.post("/", upload, addProduct);
Routes.put("/:id", updateProduct);
Routes.delete("/:id", deleteProduct);

module.exports = Routes;
