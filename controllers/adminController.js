// controllers/adminController.js
const Product = require('../models/product');
const Order = require('../models/order');

// controllers/adminController.js
const Product = require('../models/product');

exports.manageProducts = async (req, res, next) => {
    try {
        console.log('Request received at manageProducts');
        const { name, price, stock } = req.body;
        console.log('Creating product with data:', { name, price, stock });
        const product = await Product.create({ name, price, stock });
        console.log('Product created:', product);
        res.status(201).json({ message: 'Product created!', product });
    } catch (error) {
        console.error('Error in manageProducts:', error);
        next(error);
    }
};


exports.manageOrders = async (req, res, next) => {
    try {
        // Implementasi logika untuk mengelola pesanan
    } catch (error) {
        next(error);
    }
};