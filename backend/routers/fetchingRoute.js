const express=require('express')
const router=express.Router()
const FetchController=require('../controllers/FetchController')

router.get('/',FetchController.fetchHandler)

module.exports=router