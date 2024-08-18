const mongoose=require('mongoose')
const schema=mongoose.Schema

const DonationSchema=new schema({
    donorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    ngoid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'NGOSchema'
    },
    fund:{
        type:Number,
        required:true
    },
    event:{
        type:String,
        required:true
    },
    booking_date:{
        type:Date,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    booking_for:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('userDonation',DonationSchema)