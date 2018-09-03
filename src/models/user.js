import mongoose from 'mongoose';
import validator from 'validator';
  let Schema = mongoose.Schema;

module.exports =mongoose.model('User',
               new Schema({
                 user_name:{
                   type:String,
                   required:true,
                   unique:true
                 },
                   email: {
                     type:String,
                     required:true,
                    unique:true,
                    validate:(value)=>{
                      return validator.isEmail(value)
                    }
                  },
                   password:{
                     type:String,
                     required:true
                   },
                 city:String,
                 Tags:Array
               }),
               'user');
