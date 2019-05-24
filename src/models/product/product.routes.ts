import { Application, Router, Request, Response } from 'express';
import IProduct from '../Interfaces/IProduct';
const express = require('express')
const router: Router = express.Router()

const Product = require('./product.model')

router.get( '/', ( req: Request, res: Response ) => {
  Product.getProducts( res, Product.responseToClient )
})

router.post( '/', ( req: Request, res: Response ) => {
  let data: IProduct = {
    title: req.body.title,
    media: req.body.media,
    size: req.body.size,
    image: req.body.image
  }
  Product.saveProduct( data, res, Product.responseToClient )
})

module.exports = router;