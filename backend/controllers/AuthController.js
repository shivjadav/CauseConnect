const User=require('../models/user')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config()
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
                const accessToken=jwt.sign(
                    {
                        "username":user.username
                    },
                    process.env.ACCESS_SECRET,
                    {
                        expiresIn:'30s'
                    }
                   );
                   const refreshtoken=jwt.sign(
                    {
                        "username" : user.username
                    },
                    process.env.REFRESH_SECRET,
                    {
                        expiresIn:'1d'
                    }
                   );
                   user.refreshtoken=refreshtoken;
                   const result=await user.save();
                   res.cookie('jwt', refreshtoken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
                   res.json({ accessToken,"id":user._id });
            }else{
                console.log("e")
                return res.status(400).json({"message":"user's password is not correct!!"})
            }
      }catch(error){
        console.log("error")
      }
}

module.exports={handleAuth}