import express from 'express'
import productController from '../controllers/productContoller.mjs';

const productRouter= express.Router();

productRouter
.get("/",productController.AllProducts)
.get("/:id",productController.SingleProduct)



//AddProduct
.post("/add",productController.AddProduct)


//Update product
.put("/:id",productController.EditProduct)


//Delete Product
.delete("/:id",productController.DeleteProduct)

export default productRouter;