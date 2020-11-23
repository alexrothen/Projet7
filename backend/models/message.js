'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate (models) {
      models.Message.belongsTo(models.User)({
        // targetKey: 'users_id',
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  Message.init(
    {
      users_id: DataTypes.INTEGER,
      content: DataTypes.STRING,
      attachment: DataTypes.STRING,
      likes: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Message'
    }
  )
  return Message
}
