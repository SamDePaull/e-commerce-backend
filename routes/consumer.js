// routes/consumer.js
const express = require('express');
const consumerController = require('../controllers/consumerController');
const router = express.Router();

router.get('/search-products', consumerController.searchProducts);
router.post('/make-purchase', consumerController.makePurchase);
router.post('/confirm-purchase', consumerController.confirmPurchase);

module.exports = router;