'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('questions', {
      id: {type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true},
      text: {type: Sequelize.STRING, unique:true},
      isAnswered: {type: Sequelize.BOOLEAN, defaultValue:false},
    });

  },

  async down (queryInterface) {
    await queryInterface.dropTable('questions');
  }
};
