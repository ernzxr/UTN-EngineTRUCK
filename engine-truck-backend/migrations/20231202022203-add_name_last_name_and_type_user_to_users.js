'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'name', {
      type: Sequelize.STRING(45),
      allowNull: false,
    });

    await queryInterface.addColumn('users', 'last_name', {
      type: Sequelize.STRING(45),
      allowNull: false,
    });

    await queryInterface.addColumn('users', 'type_user', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'name');
    await queryInterface.removeColumn('users', 'last_name');
    await queryInterface.removeColumn('users', 'type_user');
  }
};
