require('dotenv').config();
const express=require('express')
const app=express();
const router=express.Router();
const cors = require('cors');
const dbconnect=require('./config/dbConnect')
const corsOptions  = require('./config/corsOptions');
const User=require('./models/user')
const Ngo=require('./models/ngoschema')
const donations=require("./models/Donation");
const  ContactAdmin  = require('./controllers/emailTypes/contactAdmin');
const verifyJWT=require("./middleware/verifyJWT")
const cookieparser=require('cookie-parser')
const credentials = require('./middleware/credentials');
const port=process.env.PORT;
const cron=require('node-cron');
const { checkBirthdays } = require('./controllers/birthdayTrigger');
const paymentRoutes = require('./routers/Payment');
dbconnect()
app.use(credentials);
//for testing purpose new apis and some changes in existing work is made 
// app.use(cors());
cron.schedule('0 0 * * *', async () => {
    console.log("cron running");
    try {
      await checkBirthdays(); // Awaiting checkBirthdays function
      console.log("checkBirthdays function completed successfully");
    } catch (error) {
      console.error("Error in checkBirthdays:", error); // Catching and logging any errors
    }
    console.log("after cron ran");
  });
  
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieparser())
app.use('/register',require('./routers/registerRoute'))
app.use('/signin',require('./routers/signinRoute'))
app.use('/refresh',require('./routers/refresh'))
app.use('/logout',require('./routers/logoutroute'))
app.use('/donationDetails',require('./routers/donationDetailsRoute'))
app.post('/postFeedback',ContactAdmin)
app.use('/donateinfo',require('./routers/donationRoute'))
app.use(verifyJWT)
app.use('/addNgo',require('./routers/addRoute'))
app.get('/fetchNgo/:city',require('./routers/fetchingRoute'))
app.use('/payment', paymentRoutes);
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


app.listen(port,()=>{
    console.log(`listening to port no: ${port}`)
})