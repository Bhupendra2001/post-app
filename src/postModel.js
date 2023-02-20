const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const postSchema = new mongoose.Schema({
    _id : {
        type : Number,
        default : 0
    },
    postPic : {

       type : String,
       required : true
    },

    title : {
        type : String,
        required : true,
        
    },

    content : {
        type : [String],
        required : true,
    },
    
})

postSchema.plugin(AutoIncrement, { id: 'post_seq', inc_field: '_id' });

module.exports = mongoose.model('post', postSchema)
