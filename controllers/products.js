const Product = require("../models/product");

const getAllProducts = async (req, res, next) => {
  const { featured, brand, name, sort,fields} = req.query;

  let queryObject = {};

  if (featured) { //Search Feature
    queryObject.featured = featured.toLowerCase() === "true" ? true : false;
  }
  if (brand) {
    queryObject.brand = {$regex: brand, $options : "ix"}  ;
  }
  if (name) {
    queryObject.name = {$regex: name, $options : "ix"}  
  }
  let response =  Product.find(queryObject);
  console.log("one", response)
   if(sort) { //Sort feature
     const sortList = sort.split(",").join(" ");
     response = response.sort(sortList)
   } else {
     response = response.sort("createdAt")
   }

   if(fields){  //Select feature
     const fieldList = fields.split(",").join(" ")
     response = response.select(fieldList)
   }

   const pageNumber = Number(req.query.pageNumber) || 1;
   const limit = Number(req.query.limit) || 2;
   const skip = (pageNumber-1)*limit;
 
  response = response.skip(skip).limit(limit)

  const product = await response;
  console.log("one", product)
  res.status(200).json({
    message: "Success",
    TotalRecords: product.length,
    data: product,
  });
};
//In mongoose v6 if we pass something as query which is not in model then mongosse will ignore it and return everything
module.exports = {
  getAllProducts,
};
