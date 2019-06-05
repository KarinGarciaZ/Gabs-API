const Product = require('../admin.model').Product

Product.getProducts = ( res, cb ) => {
  Product.findAll( { where: { statusItem: 0 } } )
  .then( (data) => cb( null, res, data, 200 ) )
  .catch( (error) => cb( error, res ) )
}

Product.getProduct = ( id, res, cb ) => {
  Product.findByPk( id )
  .then( (data) => cb( null, res, data, 200 ) )
  .catch( (error) => cb( error, res ) )
}

Product.saveProduct = ( data, res, cb ) => {
  Product.create( data )
  .then( (data) => cb( null, res, data, 201 ))
  .catch( (error) => cb( error, res ))
}

Product.updateProduct = ( id, data, res, cb ) => {
  Product.update( data, { where: { id } } )
  .then( (data) => cb( null, res, data, 201 ))
  .catch( (error) => cb( error, res ))
}

Product.deleteProduct = ( id, res, cb ) => {
  Product.update( { statusItem: 1 }, { where: { id } } )
  .then( (data) => cb( null, res, data, 201 ))
  .catch( (error) => cb( error, res ))
}

Product.responseToClient = ( error, res, data, status ) => {
  if( error )
    res.status(500).json(error)
  else
    res.status(status).json(data)
}

module.exports = Product;