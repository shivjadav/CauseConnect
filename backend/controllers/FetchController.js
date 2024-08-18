const NGOSchema=require('../models/ngoschema')

const fetchHandler=async (req,res)=>{
    const city=req.body.city
    if(!city) {
        return res.status(400).json({
            "message":"Give Proper information!"
        })
    }
    try{
        const ngo=await NGOSchema.find({city:city})
        if(!ngo){
             return res.status(400).json({
                "message":"Not Found!!"
             })
        }
        res.status(200).json(ngo)
    }catch(err){
        return res. status(500).json({
            "message":err.message
        })
    }
}

module.exports={fetchHandler}