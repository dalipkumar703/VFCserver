import  User from '../models/user';
export const updateCity=(result,res)=>{
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
}
