'use strict';
const {
  Model
} = require('sequelize');
const capitalizeFirstLetters = require('../utils/capitalizeFirstLetters');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    type_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
    paranoid: true
  });
  return user;
};