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
    name: {
      type:DataTypes.STRING,
      set(value) {
        this.setDataValue('name', capitalizeFirstLetters(value));
      }
    },
    last_name: {
      type:DataTypes.STRING,
      set(value) {
        this.setDataValue('last_name', capitalizeFirstLetters(value));
      }
    },
    type_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
    paranoid: true
  });
  return user;
};