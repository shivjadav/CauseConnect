const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ngoSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    //here I am adding the detail field to handle the more detailed text about ngo
    //although there is description but it can be use for shorter intro of ngo both can be used in ngo card , and detailed ngo info components respectively.
    description:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    causes:{
        type:[String],
        default:[]
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