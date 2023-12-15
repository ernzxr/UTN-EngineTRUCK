'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class engine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  engine.init({
    model: DataTypes.STRING,
    hidden: DataTypes.INTEGER,
    available: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    manufacturer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'engine',
  });
  return engine;
};