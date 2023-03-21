'use strict';
const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */


module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('votes', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            vote: {type: DataTypes.SMALLINT, allowNull: false, validate: {isIn: [[1, -1]],}}
        });

    },

    async down(queryInterface) {
        await queryInterface.dropTable('votes');
    }
};
