const express = require('express');
const router = express.Router();

const Product = require('./product/product.routes')
const User = require('./user/user.routes')

router.use( '/product', Product )
router.use( '/user', User )

module.exports = router;