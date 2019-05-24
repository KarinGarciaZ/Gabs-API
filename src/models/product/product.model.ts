import { Response } from 'express';
import IProduct from '../Interfaces/IProduct';
const Product = require('../admin.model').Product

Product.getProducts = ( res: Response, cb: any ) => {
  Product.findAll()
  .then( (data: any) => cb( null, res, data, 200 ) )
  .catch( (error: any) => cb( error, res ) )
}

Product.saveProduct = ( data: IProduct, res: Response, cb: any ) => {
  Product.create( data )
  .then( (data: any) => cb( null, res, data, 201 ))
  .catch( (error: any) => cb( error, res ))
}

Product.responseToClient = ( error: any, res: Response, data: any, status: number ) => {
  if( error )
    res.status(500).json(error)
  else
    res.status(status).json(data)
}

module.exports = Product;