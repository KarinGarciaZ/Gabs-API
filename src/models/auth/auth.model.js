import { Request, Response } from 'express';
const User = require('../models/admin.models').User;

const Auth = {}

Auth.login = ( user, req, res, cb ) => {
  User.findOne( { where: { username: user.username } } )
  .then(  )
}

module.exports = Auth