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




let productController = {
    AllProducts,
    SingleProduct
}
export default productController