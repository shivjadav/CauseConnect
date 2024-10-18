// routes/payment.js
const express = require('express');
const router = express.Router();
const { createOrder, verifyPayment } = require('../controllers/Payment');

// Create a new order
router.post('/create-order', createOrder);

// Verify payment
router.post('/verify', verifyPayment);

module.exports = router;
