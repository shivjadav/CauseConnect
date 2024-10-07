
const DonationSchema=require('../models/Donation');
const confirmDonationDonor = require('./emailTypes/confirmDonationDonor');
const confirmDonationNgo= require('./emailTypes/confirmDonationNgo')
const sendEmails= async(donorid, obj)=>{
    try{
        const emails= await DonationSchema.findOne({donorid:donorid,ngoid: obj.ngoid}).
        populate('donorid','email').
        populate('ngoid','email');
        obj.donorEmail=emails.donorid.email,
        obj.ngoEmail=emails.ngoid.email
        await confirmDonationDonor(obj);
        await confirmDonationNgo(obj);
    }
    catch(error)
    {
        console.log(error);
    }
}
const DonateHandler=async(req,res)=>{
     const {ngoid,totalcost,kits,date,cause,description}=req.body
     donorid=req.cookies.user_id
     if(!donorid|| !ngoid || !totalcost || !cause || !date  || !kits || !description){
         return res.status(400).json({
             "message":"Give all information!!"
        })
    }
try{
    const booking_date=new Date(date);
    const newDonation=await DonationSchema.create({
       donorid:donorid,
       ngoid:ngoid,
       amount:totalcost,
       cause:cause,
       booking_date:booking_date,
       description: description,
       kits: kits
    })
    await sendEmails(donorid,req.body);
    res.status(200).json({
        "message":"Donation Info stored successfully!!"
    })
    }catch(error){
    res.status(500).json({
        "message":error.message
    })
}
}
module.exports={DonateHandler}