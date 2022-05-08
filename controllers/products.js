const Product = require("../models/product");

const getAllProducts = async (req, res, next) => {
  const { featured, brand, name } = req.query;

  let queryObject = {};

  if (featured) {
    queryObject.featured = featured.toLowerCase() === "true" ? true : false;
  }
  if (brand) {
    queryObject.brand = {$regex: brand, $options : "ix"}  ;
  }
  if (name) {
    queryObject.name = {$regex: name, $options : "ix"}  
  }
  const response = await Product.find(queryObject);
  res.status(200).json({
    message: "Success",
    TotalRecords: response.length,
    data: response,
  });
};
//In mongoose v6 if we pass something as query which is not in model then mongosse will ignore it and return everything
module.exports = {
  getAllProducts,
};
