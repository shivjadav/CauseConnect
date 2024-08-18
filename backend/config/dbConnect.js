const mongoose=require('mongoose')

const dbConnect=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://shivjadav206:ToMyJphHa4d9RgKD@cluster0.yyfhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected to database!!")
    }catch(e){
        console.log(e);
    }
}
module.exports=dbConnect