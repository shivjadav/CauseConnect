const express=require('express')
const app=express();
const cors = require('cors');
const port=process.env.PORT || 3001;
const dbconnect=require('./config/dbConnect')
const corsOptions  = require('./config/corsOptions');

dbconnect()

//for testing purpose new apis and some changes in existing work is made 
// app.use(cors());
// app.get('/birthday',async(req,res)=>{
//     try{
//         const sevenDayPeriod = 604800000;
//         const today = new Date();
//         const desiredDate = new Date(today.getTime() + sevenDayPeriod);
//         console.log(desiredDate.getDate());
//         console.log(desiredDate.getMonth())
//         const birthday=new Date('2004-03-18');
//         console.log(birthday)   
//     }
//     catch(err){
//         console.log(err);
//     }
// })
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/register',require('./routers/registerRoute'))
app.use('/signin',require('./routers/signinRoute'))
app.use('/addNgo',require('./routers/addRoute'))
app.use('/fetchNgo',require('./routers/fetchingRoute'))
app.use('/donateinfo',require('./routers/donationRoute'))
app.listen(port,()=>{
    console.log(`listening to port no: ${port}`)
})