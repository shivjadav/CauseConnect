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
                console.log("not user found")
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
                        expiresIn:'10s'
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
                   res.cookie('jwt', refreshtoken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
                   console.log("done")
                   res.json({ accessToken,"id":user._id,"role":user.role });
            }else{
                console.log("e")
                return res.status(400).json({"message":"user's password is not correct!!"})
            }
      }catch(error){
        console.log("error")
      }
}

module.exports={handleAuth}