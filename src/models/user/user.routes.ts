import { Application, Router, Request, Response } from 'express';
import IUser from '../../Interfaces/IUser';

const express = require('express')
const router: Router = express.Router()

const User = require('./user.model')

router.put( '/', ( req: Request, res: Response ) => {
  let data: IUser = {
    username: req.body.title,
    password: req.body.media,
    email: req.body.size
  }
})

module.exports = router;