"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const Product = require('./product.model');
router.get('/', (req, res) => {
    Product.getProducts(res, Product.responseToClient);
});
router.post('/', (req, res) => {
    let data = {
        title: req.body.title,
        media: req.body.media,
        size: req.body.size,
        image: req.body.image
    };
    Product.saveProduct(data, res, Product.responseToClient);
});
module.exports = router;
