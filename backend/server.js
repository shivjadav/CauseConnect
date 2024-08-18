const express=require('express')
const app=express();
const cors = require('cors');
const PORT=3000;
const dbconnect=require('./config/dbConnect')
const corsOptions  = require('./config/corsOptions');

dbconnect()
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/register',require('./routers/registerRoute'))
app.use('/signin',require('./routers/signinRoute'))
app.use('/addNgo',require('./routers/addRoute'))
app.use('/fetchNgo',require('./routers/fetchingRoute'))
app.use('/donateinfo',require('./routers/donationRoute'))
app.listen(PORT,()=>{
    console.log(`listening to port no: ${PORT}`)
})