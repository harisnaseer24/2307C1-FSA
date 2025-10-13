import express from 'express'
import productController from '../controllers/productContoller.mjs';

const productRouter= express.Router();

productRouter
.get("/",productController.AllProducts)
.get("/:id",productController.SingleProduct)
// .post("/add",productController.SingleProduct)

export default productRouter;