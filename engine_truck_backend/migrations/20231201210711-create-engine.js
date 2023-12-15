'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('engines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      hidden: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      available: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      brand_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'brands',
          key:'id'
        }
      },
      manufacturer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'manufacturers',
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
    await queryInterface.dropTable('engines');
  }
};