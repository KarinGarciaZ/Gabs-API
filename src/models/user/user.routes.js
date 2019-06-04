const express = require('express')
const router = express.Router()

const User = require('./user.model')

router.put( '/', ( req, res ) => {
  let data = {
    username: req.body.title,
    password: req.body.media,
    email: req.body.size
  }
})

module.exports = router;