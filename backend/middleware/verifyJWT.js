const jwt=require('jsonwebtoken');
require('dotenv').config()

const verifyJWT=(req,res,next)=>{
    const auth=req.headers['authorization'];
    if(!auth) return res.sendStatus(401)
    
    const token=auth.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_SECRET,
        (err,decoded)=>{
            if(err) return res.sendStatus(403)
            next();
        }
    );
}

module.exports=verifyJWT