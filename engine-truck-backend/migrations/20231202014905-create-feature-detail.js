'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('feature_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      engine_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'engines',
          key:'id'
        }
      },
      feature_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'features',
          key:'id'
        }
      },
      feature_value: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('feature_details');
  }
};