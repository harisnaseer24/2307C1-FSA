// const express = require('express')// commonjs
import express from 'express'// commonjs
const app = express()
const port = 3000
// endpoints - APIs


app.get('/', (req, res) => {
    
  res.send('<h1 style="color:blue">Learning Backend Development with ExpressJs!</h1>')
})


app.get('/products', (req, res) => {

  res.status(200).json({products:["laptop","mobile","tablet"]})
})
app.get('/about', (req, res) => {

  res.status(404).send('<h1 style="color:blue">Not found!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
