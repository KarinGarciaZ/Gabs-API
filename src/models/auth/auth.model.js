const User = require('../admin.model').User;
const jwt = require('jsonwebtoken');

const Auth = {}

Auth.login = ( user, req, res, cb ) => {
  User.findOne( { where: { username: user.username } } )
  .then( userFound => {
    if ( userFound.password === user.password ) {
      jwt.sign({userId: userFound.id}, process.env.SECRET_KEY, { expiresIn: '30d' }, ( err, token ) => {
        if ( err )
          return cb( err, res )
        else {      
          req.session.jwt = `Bearer ${token}`;
          let hour = 3600000;
          req.session.cookie.maxAge = 14 * 24 * hour;
          let isLogged = true;
          let resp = { userFound, isLogged }
          return cb( null, res, resp, 200 );
        }
      })    
    }
  })
}

Auth.responseToClient = ( error, res, data, status ) => {
  if( error )
    res.status(500).json(error)
  else
    res.status(status).json(data)
}


module.exports = Auth