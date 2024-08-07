const express = require("express")
const route = express.Router()
const ProductController = require("../Controller/ProductController")

route.post("/product/insert",ProductController.insert)
route.get("/product/find",ProductController.find)
route.get("/product/list",ProductController.productlist)
route.get("/product/search",ProductController.getProducts)
route.get("/productdetails/:id",ProductController.productdetails)
route.get("/productcategory",ProductController.getcategoryProducts)
module.exports = route