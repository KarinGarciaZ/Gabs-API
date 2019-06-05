const User = require('./src/models/admin.model').User;

module.exports = ( req, res, next ) => {
  if( req.body.username === 'admin' && req.body.password === 'admin') {    
    User.findAll()
    .then( async resp => {
      if( resp.length === 0 ) {
        let password = 'admin';
        let user = {
          username: 'admin',
          name: 'admin',
          email: 'admin@admin.com',
          phoneNumber: '',
          password,
          statusItem: 0
        }

        User.create(user)
        .then( data => next() )
        .catch( error => next() )
      } else next();
    })
    .catch( err => next() )  
  } else next();
}