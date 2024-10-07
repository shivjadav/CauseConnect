const bcrypt=require('bcrypt')
const User=require('../models/user')

const handleRegister=async (req,res)=>{
    const name=req.body.name
    const email=req.body.email
    const phno=req.body.phoneno
    const address=req.body.address
    const pan=req.body.pan;
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
        "pan":pan,
        "password":hashPass,
        "email":email,
        "address":address,
        "phoneno":phno,
        "dob":dob,
        "role":18
       })
       res.status(201).json({ 'success': `New user ${name} created!` });
    }catch(err){
        res.status(500).json({ 'message': err.message });
    }
}
module.exports={handleRegister}