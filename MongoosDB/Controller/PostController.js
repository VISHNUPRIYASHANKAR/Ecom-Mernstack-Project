const Post = require("../Models/PostModel")
const Tag = require("../Models/TagModel")
exports.insert =[async (req,res)=>{

       const tags =[...req.body.tags]

       let tagIds =[]
        for(let i=0;i<tags.length; i++){
            let e = tags[i]
        console.log("keyword"+i,e);
        await Tag.findOne({keyword: e})
        .then(async(tag)=>{
            if(tag){
                tagIds = [...tagIds, tag._id]
                console.log("Existing Tag", tag._id);
            }else{
                const newTag = new Tag({
                    keyword: e
                })
                await newTag.save()
                .then((saveNewTag)=>{
                    tagIds = [...tagIds, saveNewTag._id]
                    console.log("New Tag",saveNewTag._id);
                })
            }
        })
    }
   const post = new Post({
    title:req.body.title,
    content:req.body.content,
    author:req.body.author,
    Image:req.body.Image,
    tags: [...tagIds]
   })
   post.save()
   .then((e)=>{
    res.send(e)
   })

}]

exports.findTags = [(req,res)=>{
    Tag.find()
    .then((tags)=>{
        res.send(tags)
    })
}]