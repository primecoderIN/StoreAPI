const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please provide a product name"]
    },
    brand : {
        type: String,
        required: [true, "Please provide a brand name"],
        enum: {
           values: ["Wrangler", "Rebook", "Nike","Duke"],
           message: `{VALUE} is not supported`  // With validation
        },
        // enum: ["ikea", "liddy", "caressa","marcos"]  without validation
    },
    price : {
        type: Number,
        required: [true, "Please provide a product price"]
    },
    rating : {
        type : Number,
        default: 4.5
    },
    featured : {
        type : Boolean,
        default: false 
    },
    createdAt: {
        type: Date,
        default: Date.now() //By default current time will be provided 
    }
})

module.exports = mongoose.model("Product", productSchema) 