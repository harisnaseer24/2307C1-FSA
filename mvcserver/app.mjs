
import express from 'express'// commonjs
import productRouter from './routes/productRouter.mjs'
const app = express()
const port = 3000
// endpoints - APIs

//body parser middleware 

app.use(express.json())


app.get('/', (req, res) => {
    
  res.send('<h1 style="color:blue">Learning Backend Development with ExpressJs!</h1>')
})

app.use("/products",productRouter)









//query parameters (optional)
app.get('/products/search', (req, res) => {

  const brand = req.query.brand;
  if (!brand){
    res.status(200).json({message:"showing all brand's products", products:products})
    
  } else {

    const productsByBrand= products.filter((item,index)=>{
      let br= item.brand ? (item.brand).toLowerCase(): '';
      console.log(br)
    return br == brand.toLowerCase();
  })

  if (productsByBrand.length > 0) {
    
    res.status(200).json({message:`Showing products of ${brand}`,productsByBrand})
  } else {
    
    res.status(200).json({message:`No product found from ${brand}.`})
  }
  }

})



//request body
app.get('/user', (req, res) => {
const user  = req.body;
// const {username, email,pass}  = req.body;
// const username= req.body.username;
// const username= req.body.username;
// const username= req.body.username;

// res.status(200).json({user:{
//   username,email,pass
// }})
res.status(200).json({user:user})
  

})


//adding product
app.post('/product/add', (req, res) => {
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

})


// delete
//adding product
app.delete('/product/:id', (req, res) => {
 try {
let id = req.params.id;
if (id) {
  const product= products.find((item,index)=>{
    return item.id == id;
  })// ->item || filter() -> array

  if (!product) {
    res.status(404).json({message:`No product found from this id`})
    
  } else {

    
  // let newProducts= products.filter((item,index)=>{
  //     return item.id != id;
  // })

  // products = newProducts;
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

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
