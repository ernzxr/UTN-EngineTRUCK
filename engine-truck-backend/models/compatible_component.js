'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class compatible_component extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  compatible_component.init({
    engine_id: DataTypes.INTEGER,
    component_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'compatible_component',
  });
  return compatible_component;
};