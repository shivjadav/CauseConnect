const User=require('../models/user')
const bcrypt=require('bcrypt');

const handleAuth=async (req,res) => {
      try{
            const email=req.body.email
            const password=req.body.password

            if(!email || !password) return res.status(400).json({'message':"username , password are required!",'success':false});
            const user=await User.findOne({"email":email});
            if(!user){
                return res.status(400).json({"message":"user is not registered!"})
            }
            const match=await bcrypt.compare(password,user.password)
            if(match){
                return res.status(200).json({"message":"user succesfully loged in!!"})
            }else{
                return res.status(400).json({"message":"user's password is not correct!!"})
            }
      }catch(error){
        console.log("error")
      }
}

module.exports={handleAuth}