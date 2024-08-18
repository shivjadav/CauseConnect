const bcrypt=require('bcrypt')
const User=require('../models/user')

const handleRegister=async (req,res)=>{
    console.log(req.body)
    const name=req.body.username
    const email=req.body.email
    const phno=req.body.phoneno
    const address=req.body.address
    const dob=new Date(req.body.dob)
    console.log(dob)
    const password=req.body.password

    if(!name || !password || !email  ) return res.status(400).json({'message':"username , password and email is required!"});

    const duplicate=await User.findOne({email:email}).exec();

    if(duplicate){
        return res.sendStatus(409);
    }
    try{
       const hashPass=await bcrypt.hash(password,10)
       const newUser=await User.create({
        "username":name,
        "password":hashPass,
        "email":email,
        "address":address,
        "phoneno":phno,
        "dob":dob
       })
       res.status(201).json({ 'success': `New user ${name} created!` });
    }catch(err){
        res.status(500).json({ 'message': err.message });
    }
}
module.exports={handleRegister}