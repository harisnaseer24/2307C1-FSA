import fs from 'fs'

const data= JSON.parse(fs.readFileSync('./data/data.json','utf-8'))
let products = data.products;

let AllProducts=(req, res) => {

  res.status(200).json({products:products})

}


let SingleProduct=(req, res) => {

  const id = req.params.id;
  const product= products.find((item,index)=>{
    return item.id == id;
  })// ->item || filter() -> array


  if (!product) {
    res.status(404).json({message:`No product found`})
    
  } else {
    
    res.status(200).json({message:"Product found",product:product})
  }

}

// Add product
const AddProduct=(req, res) => {
 try {

let product = req.body;
if (product) {
  
  products.push(product)
  res.status(200).json({message:`Product added successfully.`,addedProduct:product})

} else {

  
  res.status(400).json({message:`Product details are required to add the product.`})
}

  
 } catch (error) {
  console.log(error)
    res.status(500).json({message:`Internal Server error: ${error}.`})

 }

}

// EditProduct product
const EditProduct=(req, res) => {
 try {
  const id=req.params.id;
  let product = req.body;
  if (product && id) {

  let prodIndex=0;

  let checkProduct= products.find((item, index)=>{
      if( item.id ==id){
        prodIndex=index;
        return item
      }
  })

  if (checkProduct) {
    products[prodIndex]=product;
    
    res.status(200).json({message:`Product updated successfully.`,updatedProduct:product})
  } else {
    res.status(404).json({message:`Product not found.`})
    
  }

} else {
  res.status(400).json({message:`Product details are required to update the product.`})
}

  
 } catch (error) {
  console.log(error)
    res.status(500).json({message:`Internal Server error: ${error}.`})

 }

}

//Delete product
 const DeleteProduct=(req, res) => {
 try {
let id = req.params.id;
if (id) {
  const product= products.find((item,index)=>{
    return item.id == id;
  })// ->item || filter() -> array

  if (!product) {
    res.status(404).json({message:`No product found from this id`})
    
  } else {

    
 
  products = products.filter((item,index)=>{
      return item.id != id;
  })

  res.status(200).json({message:`Product deleted successfully.`})

  }

} else {

  res.status(400).json({message:`No id found.`})
}
 } catch (error) {
  console.log(error)
    res.status(500).json({message:`Internal Server error: ${error}.`})

 }

}


let productController = {
    AllProducts,
    SingleProduct,
    AddProduct,
    EditProduct,
    DeleteProduct
}
export default productController