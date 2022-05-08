require("dotenv").config() //initialized dot env
require("express-async-errors") //Async Wrapper

const express = require("express");
const app = express();
const ConnectToDB = require("./db/Connect")
const ProductsRoute = require("./routes/Products")


//Reading request body 
app.use(express.json())

const NotFoundMiddleWare = require("./middlewares/NotFoundError")
const CustomErrorHandler = require("./middlewares/CustomErrorHandler")


app.use("/api/v1/products",ProductsRoute)
app.get("/", (req,res)=> {
    res.send("<h1> Hello World </h1>")
})

//Handling Errors gracefully
app.use(NotFoundMiddleWare)
app.use(CustomErrorHandler)

//Server setup
const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;

//Mongo URI 
const URI = process.env.MONGO_URI;
const startServer = async ()=> {
   try {
       await ConnectToDB(URI)
       app.listen(PORT,HOST_NAME, ()=> {
        console.log(`Server is running at http://${HOST_NAME}:${PORT}`)
       })
   } catch (error) {
      console.log(error)
   }
}
startServer()

