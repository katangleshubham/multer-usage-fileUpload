const express=require('express');
const path=require('path');
const multer=require('multer');

const app=express();

const handlefile=(req,res)=>{
    console.log(req.file);
    //res.send('file uploaded');
    res.json({
        message:'file',
        data:req.file
    })
}

const multerstorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'./uploads'));
    },
    filename:(req,file,cb)=>{
        cb(null,`image${Date.now()}.jpg`);
    }
})

// const multiplefiles=(req,res)=>{
//     console.log(req.files);
//     res.json({
//         message:'images uploaded',
//         data:req.files
//     })
// }

const upload=multer({
    storage:multerstorage
})

app.post('/multiple',upload.array('photos',3),multiplefiles)
app.post('/uploadimg',upload.single('photo'),handlefile)
    





app.listen(3000)
console.log("server started at 3000");