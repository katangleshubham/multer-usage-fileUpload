const mongoose=require("mongoose");
const Images=mongoose.model('Images',{
    name:{
        type:String
    },
    caption:{
        type:String
    },
    comments:{
        type:Array
    },
    likes:{
        type:Number
    },
    userId:{
        type:String,
        required:true
    }
})
module.exports=Images