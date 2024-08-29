const mongoose=require('mongoose')
require('dotenv').config();

const dbConnect=async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected to database!!")
    }catch(e){
        console.log(e);
    }
}
module.exports=dbConnect