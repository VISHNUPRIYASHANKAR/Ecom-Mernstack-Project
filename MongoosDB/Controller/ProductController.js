const Product = require("../Models/ProductModel")
const multer = require("multer")
const path = require("path")
const APIFeatures = require("../utils/ApiFeatures")

const storage = multer.diskStorage({
    destination: function (req, file, cb){
      cb(null, './Files/Uploads/')
    },     
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
})

const uploader = multer({ storage: storage});

exports.insert = [
    uploader.single("image"),
    (req,res)=>{
    const product = new Product({
        name:req.body.name,
        desc:req.body.desc,
        category:req.body.category,
        price:req.body.price,
        image:req.file ? req.file.filename : null
    })
    product.save()
    .then((ele)=>{
        res.send(ele)
    })
    .catch((err)=>{
        res.send(err)
    })
}]

exports.find = [(req,res)=>{
    Product.find({price: {$gt: 300}})
    .then((product)=>{
        res.send(product)
    })
    .catch((err)=>{
        res.send(err)
    })
}]

exports.productlist = [
    (req,res)=>{
      Product.find()
      .then((product)=>{
        res.send(product)
      })
      .catch((err)=>{
        res.send(err)
      })
      }
    ]



exports.productdetails = [
  (req, res) => {
    const id = req.params.id;
    
    Product.findById(id)
      .then((product) => {
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        res.status(500).json({ message: 'Server error', error: err });
      });
  }
];

exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword?{ name : { 
      $regex: req.query.keyword,
      $options: 'i'
   }}:{}
  const products = await Product.find(query);
  res.json({
      success: true,
      products
  })
}

exports.getcategoryProducts = async (req, res, next) => {
  const query = req.query.category?{ category : { 
      $regex: req.query.category,
      $options: 'i'
   }}:{}
  //  console.log(query)
  const products = await Product.find(query);
  res.json({
      success: true,
      products
  })
}
