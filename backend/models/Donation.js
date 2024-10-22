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
    // field fund can be changed to amount
    amount:{
        type:Number,
        required:true
    },
    //description about the given donation
    description:{
        type: String,
        required: true
    },
    //Number of units delivered
    kits:{
        type:Number,
        required: true
    },
    //another field will be added that will be the cause
    cause:{
        type:String,
        required: true
    },

    booking_date:{
        type:Date,
        required:true
    }
})

module.exports=mongoose.model('userDonation',DonationSchema)