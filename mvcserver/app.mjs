import express from 'express'// commonjs
import productRouter from './routes/productRouter.mjs'
import mongoose from 'mongoose'

const app = express()
const port = 3000

//body parser middleware 
app.use(express.json())

app.get('/', (req, res) => {
    
  res.send('<h1 style="color:blue">Learning Backend Development with ExpressJs!</h1>')
})
//binding product router
app.use("/products",productRouter)

// Mongo db connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://harisnaseer:6EOgX1yRPAmnddTN@deploymentcluster.afe0u5i.mongodb.net/2307C1');
  console.log("MongoDb Connected Successfully..!")
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
