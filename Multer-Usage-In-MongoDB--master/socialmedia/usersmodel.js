const mongooes=require('mongoose')


const Users=mongoose.model('Users',{
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        default:'defualt-img.jpg'
    },
    userId:{
        type:String,
        required:true
    }
})
