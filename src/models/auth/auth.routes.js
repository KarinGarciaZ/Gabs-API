import { Request, Response } from 'express';
const express = require('express')
const router = express.Router()

router.get( '/login', ( req, res ) => {
  let user = {
    username: req.body.username,
    password: req.body.password
  }

  
})