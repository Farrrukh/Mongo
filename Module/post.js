const mongoose=require('mongoose');

const post_schema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model("post",post_schema);