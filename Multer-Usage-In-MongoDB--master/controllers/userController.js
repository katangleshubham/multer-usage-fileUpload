
const userModels=require('../models/userModel')
const authModel=require('../models/authModel')
const uniqid=require('uniqid')
const path=require('path');
const multer=require('multer');



const checktoken=(req,res,next)=>{
    authModel.findOne({authToken:req.headers.authtoken})
    .then((data)=>{
        console.log("token present");
        console.log(data);
        next();
    }).catch((err)=>{
        console.log(err);
        res.send("error");

    })

}

const handlefile=(req,res)=>{
    console.log(req.file);
    //res.send('file uploaded');
    // userModels.findOneAndUpdate({'email':req.data},{$set:{"profilepic":req.data.file.filename}})
    res.json({
        message:'file',
        data:req.file.filename
    })
}

const multerstorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'uploads'));  //uploads folder is in controllers
    },
    filename:(req,file,cb)=>{
        cb(null,`image${Date.now()}.jpg`);
    }
})

const upload=multer({
    storage:multerstorage
})

const profile=(req,res)=>{
    let = userModels.findOne({emai})
    authModel.findOneAndUpdate({email:email},{$set:{"profilepic":req.data.file.filename}})
    .then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log("erorr img");
    })

}










const registerUser=(req,res)=>{
     var name=req.body.name
     var email=req.body.email
     var password=req.body.password
     userModels.create({name,email,password,profilepic})
     .then((data)=>{
         console.log(data);
        res.json({
            message:"User created successfully",
            data:data
            
        })
     }).catch((err)=>{
        res.json({
            message:"USER SIGNUP FAILED",
            data:err
        })
     })
 }


const loginUser=(req,res)=>{
    
    userModels.findOne({$and:[{"email":req.body.email},{"password":req.body.password}]})
    .then((data)=>{
        if(data!=null){
            res.json({
                message:"Login Successfull",
                })
            }
           else{
               res.json({
                   message:"Login unsuccessfull",
                   data:err
                })
            }
          var email=req.body.email
          var authToken=uniqid()
          var userID=data._id
          authModel.create({email,authToken,userID});
                 
    }).catch((err)=>{
       res.json({
           message:"USER LOGIN FAILED"
       })
    })
}


const logoutUser=(req,res)=>{
    authModel.findOneAndDelete({"authToken":req.body.authToken})
    .then((data)=>{
        if(data!=null){
            res.json({
                message:"Log Out succssefull",
                })
            }
           else{
               res.json({
                   message:"Logout unsuccessfull",
                   data:err
                })
            }
    }).catch((err)=>{
        res.json({message:"Error in logout"})
    })
}

const currentUser=(req,res)=>{
    console.log(req.headers)
    authModel.findOne({authToken:req.headers.authtoken})
    .then((data)=>{
        if(data!=null){
            res.json({
                message:"successfully fetched current user",
                data:data.email
                })
            }
           else{
               res.json({
                   message:"Error"
                })
            }

            
    }).catch((err)=>{
        res.json({message:"Error"})
    })
}




module.exports.registerUser=registerUser;
module.exports.loginUser=loginUser;
module.exports.logoutUser=logoutUser;
module.exports.currentUser=currentUser;
module.exports.checktoken=checktoken;
module.exports.profile=profile;
//module.exports.uploadfile=uploadfile;

module.exports.upload=upload;
module.exports.handlefile=handlefile;