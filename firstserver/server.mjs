// const express = require('express')// commonjs
import express from 'express'// commonjs
const app = express()
const port = 3000
// endpoints - APIs

//body parser middleware 

app.use(express.json())


app.get('/', (req, res) => {
    
  res.send('<h1 style="color:blue">Learning Backend Development with ExpressJs!</h1>')
})



app.get('/products', (req, res) => {

  res.status(200).json({products:["laptop","mobile","tablet"]})
})
app.get('/about', (req, res) => {

  res.status(404).send('<h1 style="color:blue">Not found!</h1>')
})



//6 - 10 - 2025
//route parameters (compulsory)
app.get('/product/:id', (req, res) => {

  const id = req.params.id;
  if (id > 100) {
    res.status(404).json({message:`No product found`})
    
  } else {
    
    res.status(200).json({products:`showing details of product id : ${id}`})
  }


})
//query parameters (optional)
app.get('/products/search', (req, res) => {

  const name = req.query.name;
  if (!name){
    res.status(200).json({message:`Hello User`})
    
  } else {
    
    res.status(200).json({message:`Hello ${name}`})
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



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
