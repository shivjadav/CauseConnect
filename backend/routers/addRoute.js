const express=require('express')
const router=express.Router()
const AddController=require('../controllers/AddController')

router.post('/',AddController.addHandler)

module.exports=router