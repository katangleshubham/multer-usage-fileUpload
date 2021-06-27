const mongooes=require('mongoose')



const userSchema=mongooes.Schema({
    name:{
        type:String,
        required:[true,'cannot register without name']
    },
    email:{
        type:String,
        required:true,
        unique:[true,'cannot register without email']
    },
    password:{
        type:String,
        required:[true,'cannot register without ps']
    },
    profilepic:{
        type:String
    }
})



const Users=mongooes.model('Users',userSchema)


module.exports=Users;