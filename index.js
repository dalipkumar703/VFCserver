import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
import multer from 'multer';
import {updateCity} from './src/controllers/update';
mongoose.connect('mongodb://dalip123:dannyLUCK1!@ds157584.mlab.com:57584/vote', { useNewUrlParser: true });
const app=express();
const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, './images');
      },
      filename: (req, file, cb) =>{
        console.log("upload cb",file.originalname);
    cb(null,file.originalname);
  },
    });
const upload = multer({ storage:storage});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./'));
app.get('/',(req,res)=>{
  res.send("Bingo");
})
app.post('/update-city',(req,res)=>{
  let result=req.body;
  updateCity(result,res);
})
app.post('/add-new-form',(req,res)=>{
  let result=req.body;
    console.log("result",result);
    res.json("working");
});
app.post('/upload-image',upload.single('file'),(req,res)=>{
   console.log("file:",req.file);
   res.json("working");
    })
app.listen(3001,()=>{console.log("listening port 3001")});
