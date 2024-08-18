
const DonationSchema=require('../models/Donation')

const DonateHandler=async(req,res)=>{
     const {donorid,ngoid,fund,event,booking_date,city,booking_for}=req.body
     if(!donorid|| !ngoid || !fund || !event || !booking_date || !city || !booking_for){
        return res.status(400).json({
            "message":"Give all information!!"
        })
     }
try{
    const b_date=new Date(booking_date);
    const newDonation=await DonationSchema.create({
       donorid:donorid,
       ngoid:ngoid,
       fund:fund,
       event:event,
       booking_date:b_date,
       booking_for:booking_for,
       city:city
    })
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