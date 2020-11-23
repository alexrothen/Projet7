'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {
      models.User.hasMany(models.Message)
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      bio: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
