const Sequelize = require('sequelize');
const sequelize = require('../db-config/mysql-connection');

/*-----------CREATING MODELS----------- */

const Product = sequelize.define('product', {
  title: Sequelize.STRING,
  media: Sequelize.STRING,
  size: Sequelize.STRING,
  image: Sequelize.STRING
})

/*--GENERETE TABLES AND RELATIONS IF THESE DOESN'T EXIST--*/

sequelize.sync()
.then( () => console.log('DATABASE READY TO WORK'))
.catch( (error: any) => console.log('ERROR CONNECTING TO THE DATABASE: --->', error))


module.exports = { Product };