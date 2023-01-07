'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.createTable('users', {
     id: {type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true},
     login: {type: Sequelize.STRING, unique:true},
     email: {type: Sequelize.STRING, unique:true},
     password:{type:Sequelize.STRING},
     role:{type: Sequelize.STRING, defaultValue:"USER"},
     balance: {type: Sequelize.DECIMAL, defaultValue:0},
     avatar: {type: Sequelize.STRING},
     score: {type: Sequelize.INTEGER, defaultValue:0},
   });

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');
  }
};
