const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const userSchema =new Schema(
    {
       username: {
             type: String,
             required:true
        },
        password:{
            type: String,
            required:true
        },
        email:{
             type:String,
             required:true
        },
        address:{
            type:String,
            required:true
        },phoneno:{
            type:String,
            required:true
        },dob:{
            type:Date,
            required:true
        }
    }
);

module.exports=mongoose.model('User',userSchema);