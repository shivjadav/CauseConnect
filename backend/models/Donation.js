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
    //number of kits delivered
    kits:{
        type:Number,
        required: true
    },
    //another field will be added that will be the cause
    cause:{
        type:String,
        required: true
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