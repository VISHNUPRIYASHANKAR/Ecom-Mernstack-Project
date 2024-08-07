const express = require("express")
const app = express()

app.use(express.urlencoded())
app.use(express.json())

const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")
const MOONGOOB_URL ="mongodb://127.0.0.1:27017/address"

const UserRoute = require("./Routes/UserRouter")
const PostRoute = require("./Routes/PostRoute")
const ProductRoute = require("./Routes/ProductRoute")
const Orderroute = require("./Routes/Orderroute")
app.use(ProductRoute)
app.use(UserRoute)
app.use(PostRoute)
app.use(Orderroute)

const AuthMiddleware = require('./middleware/Authendicationmiddleware')

app.get("/unprotected",(req,res)=>{
    res.send("Unprotected URL token not needed")
})
app.get("/protected", AuthMiddleware.verifyToken, (req,res)=>{
    res.send("Unprotected URL tokenneeded")
})

mongoose.connect(MOONGOOB_URL)
.then(()=>{
console.log("DB connection Sucess");
})
.catch((err)=>{
    console.log("DB connection failed",err);
})


//=========================================================

const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb){
      cb(null, './Files/Uploads/')
    },     
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
})

const uploader = multer({ storage: storage});

app.post('/upload/single',uploader.single('uploaded_file'), (req,res) => {
  console.log(req.file, req.body)
  res.status(200).send("file upload successfully..!")
});

// app.post('/upload/multiple',uploader.array('uploaded_file',10), (req,res) => {
//     console.log(req.files)
//     res.send("file upload successfully..!")
//   });

app.use('/Uploads', express.static('./Files/Uploads'))



//==========================================================



app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})
