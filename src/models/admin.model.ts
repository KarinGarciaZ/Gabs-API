const Sequelize = require('sequelize');
const sequelize = require('../db-config/mysql-connection');

/*-----------CREATING MODELS----------- */

const Product = sequelize.define('product', {
  title: Sequelize.STRING,
  media: Sequelize.STRING,
  size: Sequelize.STRING,
  image: Sequelize.STRING,
  statusItem: Sequelize.INTEGER
})

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
})

/*--GENERETE TABLES AND RELATIONS IF THESE DOESN'T EXIST--*/

sequelize.sync({force: true})
.then( () => console.log('DATABASE READY TO WORK'))
.catch( (error: any) => console.log('ERROR CONNECTING TO THE DATABASE: --->', error))


module.exports = { Product, User };