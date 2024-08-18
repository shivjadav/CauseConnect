const NGOSchema=require('../models/ngoschema')

const addHandler=async (req,res)=>{
    const name=req.body.name
    const city=req.body.city
    const description=req.body.description
    const email=req.body.email

    if(!name || !city || !description || !email) return res.status(400).json({"message":"provide all information!!"})
    try{
const ngo=await NGOSchema.findOne({name:name,city:city}).exec()
//if we get duplicate
if(ngo){
    return res.sendStatus(409)
}
const newngo=await NGOSchema.create({
    name:name,
    city:city,
    description:description,
    email:email
})
res.status(200).json({"message":"NGO Added successfully!!"})
}catch(error){
    console.log(error.message)
    res.status(500).json({"message":error.message})
}
}

module.exports={addHandler}