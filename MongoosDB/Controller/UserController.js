const User = require('../Models/UserModels')
const {validationResult}= require("express-validator")
const UserValidator = require("../validators/UserValidator")
const bcrypt = require("bcrypt")
const { check } = require('express-validator');

exports.insert = [
    UserValidator.validateInsert,
    async(req , res) => {
    const errors = validationResult(req)
    const hashedPassword = await bcrypt.hash(req.body.password,10)

    if(errors.isEmpty()) {
        const user = new User({
            username : req.body.username,
            email : req.body.email,
            contact : req.body.contact,
            password : hashedPassword,
        });
        // const token = user.getJwtToken();
        // res.status(201).json({
        //     success: true,
        //     user,
        //     token
        // })
        console.log(errors);
    

        
        user.save()
        .then((ele) => {res.send(ele)})
        .catch((err) => {res.send(err)})

     } else{
        res.send(errors)

    }

  }
]
  
exports.list = [
    (req , res ) => {
        User.find().populate("address")
        .then((user) => res.send(user))
        .catch((err) => res.send(err))

    }
]

exports.login = [
    (req, res)=> {
        const email = req.body.email
        const password = req.body.password
        User.findOne({
            email : email ,
            password : password
        })
        .then((user) => {
            if(user) {
                res.send({userFound : true})
            }else{
                res.send({userFound : false})
            }
        }
        )
        .catch(() => res.send(err))
    }

]
exports.update = [
    (req,res)=>{
        const id = req.params.id
        User.updateOne(
            {_id: req.params.id},
            {$set:{
                username: req.body.username,
                email:req.body.email,
                contact:req.body.contact,
                password:req.body.password

            }})
            .then((user)=>{
                req.send(user)
            })
            .catch((err)=>{
                res.send(err)
            })
    }
]
exports.delete = [
    (req,res) => {
        User.deleteOne({_id: req.params.id})
        .then((data)=>{
            req.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
]


const Address= require("../Models/Addressmodel")
exports.insertUserwithAddress = [
  (req,res)=>{
    const address = new Address({
      plotno:req.body.address.plotno,
      street:req.body.address.street,
      landmark:req.body.address.landmark,
      city:req.body.address.city,
      state:{type:String,required:true},
      // country:{type:String,required:true},
      pincode:{type:String,required:true}

     
    })
    address.save()
    .then((ele)=>{
      const user = new User ({
        username:req.body.username,
        email:req.body.email,
        contact:req.body.contact,
        password:req.body.password,
        address:ele._id
      })
         
    user.save()
    .then((ele) => {res.send(ele);})
    .catch((err) => {res.send(err);});

   })
}]

//  contacts 

const contacts = require("../Models/ContactModel")

exports.insertUserWidthAddreessContact = [
  async(req , res ) => {
        let savedAddress = null
        let savedContacts = []

        const address = new Address({
            plotno : req.body.address.plotno , 
            street : req.body.address.street , 
            landmark : req.body.address.landmark , 
            city : req.body.address.city , 
            state : req.body.address.state , 
            pincode : req.body.address.pincode 
         
        })
        await address.save()
        .then((ele) => savedAddress  = ele )

        console.log("address saved");

        for(let i = 0 ; i < req.body.contacts.length ; i++) {
            let e = req.body.contacts[i]
            const contact = new contacts({
                data : e.data , type : e.type , active : e.active
            })

            console.log("saving Contact");

            await contact.save()
            .then((t) => {
                savedContacts = [...savedContacts , t._id]
            })
        }
        
        console.log(savedContacts);
        console.log("saving Student ");

             const user = new User({
                username : req.body.username ,
                email :  req.body.email ,
                contact : req.body.contact ,
                password : req.body.password , 
                contacts : savedContacts
            })

           await user.save()
            .then((data) => {res.send(data)})
            .catch((err) => {res.send(err)})

    }]