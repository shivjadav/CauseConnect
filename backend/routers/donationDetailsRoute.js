const express=require('express')
const router=express.Router();

router.get('/',require('../controllers/donationDetails'));

module.exports=router