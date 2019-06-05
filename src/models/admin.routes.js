const express = require('express');
const router = express.Router();

const userAuth = require('../auth/authentication')
const auth = require('../auth/webauthentication')

const Product = require('./product/product.routes')
const User = require('./user/user.routes')
const Auth = require('./auth/auth.routes')

router.use( '/product',auth, Product )
router.use( '/user', userAuth, User )
router.use( '/auth', Auth )

module.exports = router;