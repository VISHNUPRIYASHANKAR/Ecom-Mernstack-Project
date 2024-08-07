const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:{type: String,required: true},
    content:{type: String,required: true},
    author:{type: String,required: true},
    Image:{type: String,required: true},
    tags:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Tag"
    }]
},{timestamps: true})

const PostModel = mongoose.model("Post",PostSchema)
module.exports = PostModel