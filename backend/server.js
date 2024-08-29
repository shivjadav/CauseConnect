const express=require('express')
const app=express();
const cors = require('cors');
require('dotenv').config();
const dbconnect=require('./config/dbConnect')
const corsOptions  = require('./config/corsOptions');
const User=require('./models/user')
const Ngo=require('./models/ngoschema')
const donations=require("./models/Donation")
dbconnect()
const port=process.env.PORT;

//for testing purpose new apis and some changes in existing work is made 
// app.use(cors());
app.get('/birthday/:email',async(req,res)=>{
    try{
        // const sevenDayPeriod = 604800000;
        // const today = new Date();
        // const desiredDate = new Date(today.getTime() + sevenDayPeriod);
        // console.log(desiredDate.getDate());
        // console.log(desiredDate.getMonth())
        // const birthday=new Date('2004-03-18');
        // console.log(birthday)   
        const email=req.params.email;
        const user=await donations.find()
        if(!user){
            return res.status(400).json({"msg":"not asdf found"});
        }
        return res.status(200).json({"msg":user})
    }
    catch(err){
        console.log("hello")
        console.log(err);
    }
})
// app.use(cors(corsOptions));
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/register',require('./routers/registerRoute'))
app.use('/signin',require('./routers/signinRoute'))
app.use('/addNgo',require('./routers/addRoute'))
app.get('/fetchNgo/:city',require('./routers/fetchingRoute'))
app.use('/donateinfo',require('./routers/donationRoute'))
app.listen(port,()=>{
    console.log(`listening to port no: ${port}`)
})