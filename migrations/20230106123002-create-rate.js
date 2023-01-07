'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('rates', {
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      rate: {type: Sequelize.STRING, allowNull: false},
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rates');
  }
};
