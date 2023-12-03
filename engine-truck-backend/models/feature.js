'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feature.init({
    feature_name: DataTypes.STRING,
    hidden: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'feature',
  });
  return feature;
};