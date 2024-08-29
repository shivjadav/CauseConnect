const express=require('express')
const router=express.Router()
const FetchController=require('../controllers/FetchController')

router.get('/fetchNgo/:city',FetchController.fetchHandler)

module.exports=router