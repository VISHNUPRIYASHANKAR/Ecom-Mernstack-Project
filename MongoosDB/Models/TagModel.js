const mongoose = require("mongoose")
const TagSchema = new mongoose.Schema({
    keyword:{type: String,required: true},
    posts:[{
         type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }]
}, {timestamps: true})

const TagModel = mongoose.model("Tag",TagSchema)
module.exports = TagModel