const express=require('express')
const router=express.Router();
const RegisterController=require('../controllers/RegisterController')

router.post('/',RegisterController.handleRegister);

module.exports=router