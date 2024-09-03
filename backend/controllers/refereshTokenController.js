const jwt=require('jsonwebtoken');
const User=require('../models/user')
require('dotenv').config()

const refreshHandler=async(req,res)=>{
     const cookies=req.cookies
     console.log(cookies)
     if(!cookies?.jwt) return res.sendStatus(401);
     const refreshToken=cookies.jwt
     const user=await User.findOne({"refreshtoken":refreshToken})
     console.log(user)
     if(!user) return res.sendStatus(403);

     jwt.verify(refreshToken,
        process.env.REFRESH_SECRET,
        (err,decoded)=>{
            console.log(decoded)
            if(err || decoded.username!=user.username) return res.sendStatus(403)
            const accessToken=jwt.sign(
                    {
                        "username":user.username
                    },
                    process.env.ACCESS_SECRET,
                    {
                        expiresIn:'30s'
                    }
                   );
            res.json({accessToken})    
        }
     );
}

module.exports={refreshHandler}