"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product = require('../admin.model').Product;
Product.getProducts = (res, cb) => {
    Product.findAll()
        .then((data) => cb(null, res, data, 200))
        .catch((error) => cb(error, res));
};
Product.saveProduct = (data, res, cb) => {
    Product.create(data)
        .then((data) => cb(null, res, data, 201))
        .catch((error) => cb(error, res));
};
Product.responseToClient = (error, res, data, status) => {
    if (error)
        res.status(500).json(error);
    else
        res.status(status).json(data);
};
module.exports = Product;
