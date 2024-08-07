const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    desc:{type: String},
    category:{type:String},
    price:{type: Number, required:true},
    image:{type: String, required:true}
},{timestamps: true})

const ProductModel = mongoose.model("Product",ProductSchema)

module.exports = ProductModel