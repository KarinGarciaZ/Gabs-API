import { Response } from 'express';
import IUser from '../../Interfaces/IUser';
const Product = require('../admin.model').Product


Product.responseToClient = ( error: any, res: Response, data: any, status: number ) => {
  if( error )
    res.status(500).json(error)
  else
    res.status(status).json(data)
}

module.exports = Product;