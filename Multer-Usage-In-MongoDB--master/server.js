// import app 
//import modules 


// connect database 

const app=require('./app');

const mongoose=require('mongoose');
const dotenv = require('dotenv');
mongoose.set('useCreateIndex', true);

dotenv.config({path:"config.env"})

//const usermodels=require('./models/authModel')

mongoose.connect(process.env.DATABASE,{useNewUrlParser:true})
.then(()=>{
    console.log("db connected");
    app.listen(process.env.PORT,()=>{
        console.log("server started on port 3000");
    })
}).catch((err)=>{
    console.log("err in connection");
})
