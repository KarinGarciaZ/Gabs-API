const jwt = require('jsonwebtoken');
const User = require('../models/admin.model').User;

module.exports = ( req, res, next ) => {
  let token = req.session.jwt;
  if ( typeof(token) === 'undefined' ) 
    return res.status(403).json('Token undefined.');

  let bearer = token.split(' ');
  token = bearer[1];

  jwt.verify( token, process.env.SECRET_KEY, ( err, info ) => {
    if(err) return res.status(403).json('Token no valid.');
    next()
  })  
}