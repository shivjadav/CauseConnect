// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    razorpay_order_id: {
        type: String,
        required: true,
    },
    razorpay_payment_id: {
        type: String,
        required: false,
    },
    razorpay_signature: {
        type: String,
        required: false,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['created', 'paid'],
        default: 'created',
    },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
