const express = require('express')
const router = express.Router()
const Auth = require('./auth.model')

router

.post( '/login', ( req, res ) => {
  let user = {
    username: req.body.username,
    password: req.body.password
  }
  console.log(user)
  
  return Auth.login( user, req, res, Auth.responseToClient )
})

module.exports = router;