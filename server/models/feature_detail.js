'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feature_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feature_detail.init({
    engine_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER,
    feature_value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'feature_detail',
  });
  return feature_detail;
};