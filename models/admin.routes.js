const express = require('express')
const router = express.Router()

const Product = require('./product/product.routes')

router.use( '/product', Product )


module.exports = router;