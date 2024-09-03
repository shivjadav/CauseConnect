const express=require('express')
const router=express.Router()
const refereshTokenController=require('../controllers/refereshTokenController')

router.get('/',refereshTokenController.refreshHandler);
module.exports=router