const express=require('express')
const router=express.Router()
const DonationController=require('../controllers/DonateController')

router.post('/',DonationController.DonateHandler)

module.exports=router