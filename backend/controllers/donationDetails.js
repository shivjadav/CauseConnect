const Donation=require('../models/Donation')
const Ngo=require('../models/ngoschema')

const donationDetails= async(req,res)=>{
    try{
        const user_id=req.cookies.user_id;
        const donations= await Donation.find({donorid: user_id}, "amount description kits cause booking_date").
        populate('ngoid', "name city");
        // console.log(donations);
        if(donations.length<=0){
            return res.status(400).json({"message":"No donations made yet"});
        }
        return res.status(200).json(donations)

    }
    catch(error){
        return res.status(400).json({"message":"There has been an internal issue"});
    }
}
module.exports=donationDetails;