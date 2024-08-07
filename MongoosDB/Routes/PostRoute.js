const express = require("express")
const route = express.Router()
const PostController = require("../Controller/PostController")

route.post("/insert",PostController.insert)
module.exports = route