const mongooes=require("mongoose");

const AuthTokens=mongooes.model('AuthTokens',{
    email:{
        type:String,
        required:true,
        unique:true
    },
    authToken:{
        type:String,
        required:true,
        unique:true
    },
    userID:{
        type:String
    },
    lastlogin:{
        type:String,
        default:Date().toString()

    }
})

module.exports=AuthTokens;