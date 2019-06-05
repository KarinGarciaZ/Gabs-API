const Product = require('../admin.model').Product


Product.responseToClient = ( error, res, data, status ) => {
  if( error )
    res.status(500).json(error)
  else
    res.status(status).json(data)
}

module.exports = Product;