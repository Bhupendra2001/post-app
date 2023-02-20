
const postModel = require('./postModel')
const { uploadFile } = require('./aws')

const createPost = async (req,res)=>{
    try{
  
    let Data = req.body
    if(!Data || Object.keys(Data).length == 0) return res.status(400).send("please give some data")

    let  postPic = req.files
    if(!postPic[0]) return res.status(400).send({ status: false, message: " Please provide post image " })
    let { title, content  } = Data
    if(!title) return res.status(400).send("please provide title")
    if(!content) return res.status(400).send("please provide content")

    Data["postPic"] =  await uploadFile(postPic[0])
    let postData = await postModel.create(Data)
    return res.status(201).send({ data : postData })

    }catch(err){
    return res.status(500).send({status : false , message : err.message})
    }
}


const getAllPost = async (req,res)=>{
    try{
       
        let post = await postModel.find()
        if(!post) return res.status(404).send("posts not found")
        return res.status(200).send({status : true, data : post})

    }catch(err){
        return res.status(500).send({status : false , message : err.message})
    }
} 

const getPost = async (req, res)=> {
    try{
        let id = req.params.id
        let post = await postModel.findOne({_id : id})
       
        return res.status(200).send({status : true, data : post ,})

    }catch(err){
        return res.status(500).send({status : false , message : err.message})
    }
}

const updatePost = async (req, res)=>{
    try{

    let id = req.params.id
    let updateData = req.body
    let  postPic = req.files
   
      if(postPic.length == 1){ 
        updateData["productImage"]  = await uploadFile(postPic[0])
     }

    let final = await postModel.findByIdAndUpdate({_id : id},  { $set : updateData}, {new : true})

    return res.status(200).send({status : true, message : "posts updated successfully", data : final})
    }catch(err){
        return res.status(500).send({status : false , message :err.message})
    }
}

const deletePost = async (req,res)=>{
    try{
        let id = req.params.id

        let removed = await postModel.findByIdAndUpdate({id }, { $set : { postPic : "", content : "",title : "" }})

        return res.status(200).send("post deleted successfully")

    }catch(err){
        return res.status(500).send({status : false , message : err.message})
    }
}
module.exports = { createPost , getAllPost , getPost , updatePost , deletePost}