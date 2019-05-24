import { Application, Router, Request, Response } from 'express';
import IProduct from '../../Interfaces/IProduct';
const express = require('express')
const router: Router = express.Router()

const Product = require('./product.model')

router.get( '/:id', ( req: Request, res: Response ) => {
  let id: number = req.params.id;
  Product.getProduct( id, res, Product.responseToClient )
})

router.get( '/', ( req: Request, res: Response ) => {
  Product.getProducts( res, Product.responseToClient )
})

router.post( '/', ( req: Request, res: Response ) => {
  let data: IProduct = {
    title: req.body.title,
    media: req.body.media,
    size: req.body.size,
    image: req.body.image,
    statusItem: 0
  }
  Product.saveProduct( data, res, Product.responseToClient )
})

router.put('/:id', ( req: Request, res: Response ) => {
  let id: number = req.params.id;
  let data: IProduct = {
    title: req.body.title,
    media: req.body.media,
    size: req.body.size,
    image: req.body.image,    
    statusItem: 0
  }
  Product.updateProduct( id, data, res, Product.responseToClient )
})

router.delete('/:id', ( req: Request, res: Response ) => {
  let id: number = req.params.id;
  Product.deleteProduct( id, res, Product.responseToClient )
})

module.exports = router;