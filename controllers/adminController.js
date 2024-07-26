// controllers/adminController.js
const Product = require('../models/product');
const Order = require('../models/order');

exports.manageProducts = async (req, res, next) => {
    try {
        // Implementasi logika untuk mengelola produk
    } catch (error) {
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