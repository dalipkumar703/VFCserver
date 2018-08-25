import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import  User from './src/models/user';
mongoose.connect('mongodb://dalip123:dannyLUCK1!@ds157584.mlab.com:57584/vote', { useNewUrlParser: true });
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./'));
app.get('/',(req,res)=>{
  res.send("Bingo");
})
app.post('/update-city',(req,res)=>{
  let result=req.body;
  console.log("city",result.city);
  User.update({user_name:result.user_name},{
    $set:{
    city:result.city
  }
}).exec((err,data)=>{
    if(!err){
      console.log("data ",data);
      res.json(data);
    }
    else {
      console.log("err",err);
     res.json({err:err.message});
    }
  });
})
app.listen(3001,()=>{console.log("listening port 3001")});
