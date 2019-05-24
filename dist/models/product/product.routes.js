"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const Product = require('./product.model');
router.get('/:id', (req, res) => {
    let id = req.params.id;
    Product.getProduct(id, res, Product.responseToClient);
});
router.get('/', (req, res) => {
    Product.getProducts(res, Product.responseToClient);
});
router.post('/', (req, res) => {
    let data = {
        title: req.body.title,
        media: req.body.media,
        size: req.body.size,
        image: req.body.image,
        statusItem: 0
    };
    Product.saveProduct(data, res, Product.responseToClient);
});
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let data = {
        title: req.body.title,
        media: req.body.media,
        size: req.body.size,
        image: req.body.image,
        statusItem: 0
    };
    Product.updateProduct(id, data, res, Product.responseToClient);
});
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Product.deleteProduct(id, res, Product.responseToClient);
});
module.exports = router;
