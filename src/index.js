const express = require('express')
const mongoose = require('mongoose')
const route = require('./router')
const app = express();
const multer = require('multer')
app.use(express.json())
app.use(multer().any())

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://bhupendra_:1B97GiRnjBfdXTL4@cluster5.fjlkdvr.mongodb.net/Post-app',{useNewUrlParser: true})
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err))

app.use('/', route)



app.use(function(req,res){
    res.status(404).send({status:false,message:"incorrect url"})
})


app.listen(3005, ()=>{
    console.log("server is started in port 3005")
})