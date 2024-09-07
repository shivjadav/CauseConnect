const express=require('express')
const router=express.Router()
const LogoutController=require('../controllers/LogoutController')

router.post('/',LogoutController.handleLogout);
module.exports=router