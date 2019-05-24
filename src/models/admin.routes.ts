const express = require('express')
const router = express.Router()
import {  } from 'sequelize'
const Product = require('./product/product.routes')

router.use( '/product', Product )


module.exports = router;