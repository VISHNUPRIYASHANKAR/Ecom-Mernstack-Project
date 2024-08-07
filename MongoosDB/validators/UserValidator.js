const User = require("../Models/UserModels")
const {body, validationResult}= require("express-validator")

exports.validateInsert =[
    body("username").trim().isLength({min:5}).withMessage("Username must be above 5 characrters"),
    body("email").trim().isEmail().withMessage("Provide a valid email id"),
    body("username").trim().isLength({min:5}).withMessage("Username already exist")
    .custom((value)=>{
       return User.findOne({username: value})
       .then((user)=>{
        if(user){
            return Promise.reject("User already exists")
        }
       })
    })
]