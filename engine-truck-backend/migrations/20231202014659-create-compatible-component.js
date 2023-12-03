'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('compatible_components', {
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
      component_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'components',
          key:'id'
        }
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
    await queryInterface.dropTable('compatible_components');
  }
};