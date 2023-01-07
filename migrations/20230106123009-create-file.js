'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('files', {
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      name: {type: Sequelize.STRING, unique: true, allowNull: false},
      extension: {type: Sequelize.STRING, allowNull: false},
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('files');
  }
};
