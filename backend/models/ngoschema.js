const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ngoSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('NGOSchema',ngoSchema)