//This is to populate data in database dynamically
require("dotenv").config()

const connectDB = require("./db/Connect")
const Product = require("./models/product")
const productJSON = require("./products.json")



const populateDB = async()=> {
    try {
      await   connectDB(process.env.MONGO_URI);
      await Product.deleteMany() //Removing the existing products before adding new
      await Product.create(productJSON) //Dynamically pushing all the products to database
      process.exit(0) //I want to stop execution of this file after pushing data to database
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

populateDB()