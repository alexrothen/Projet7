/* connection/js */

const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  'p7_dev',
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
)

sequelize
  .authenticate()
  .then(() => console.log('Connexion à Mysql réussie !'))
  .catch(() => console.log('Connexion à Mysql échouée !'))

module.exports = sequelize
