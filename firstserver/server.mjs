// const express = require('express')// commonjs
import express from 'express'// commonjs
import fs from 'fs'

const data= JSON.parse(fs.readFileSync('./data/data.json','utf-8'))
let products = data.products;
// console.log(products)

const app = express()
const port = 3000
// endpoints - APIs

//body parser middleware 

app.use(express.json())


app.get('/', (req, res) => {
    
  res.send('<h1 style="color:blue">Learning Backend Development with ExpressJs!</h1>')
})



app.get('/products', (req, res) => {

  res.status(200).json({products:products})

})


app.get('/about', (req, res) => {

  res.status(404).send('<h1 style="color:blue">Not found!</h1>')
})


//6 - 10 - 2025
//route parameters (compulsory)
app.get('/product/:id', (req, res) => {

  const id = req.params.id;
  const product= products.find((item,index)=>{
    return item.id == id;
  })// ->item || filter() -> array


  if (!product) {
    res.status(404).json({message:`No product found`})
    
  } else {
    
    res.status(200).json({message:"Product found",product:product})
  }

})

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

// Create 3 endpoints
//  1. user details - implement request body
// 2. delete user - implement route parameter 
// 3. search user - implement query parameter (q) 

// 8/10/25
//file system




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
