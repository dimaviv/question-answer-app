'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('answers', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            text: {type: Sequelize.TEXT, allowNull: false},
            rating: {type: Sequelize.INTEGER, defaultValue: 0},
            isBest: {type: Sequelize.BOOLEAN, defaultValue: false}
        });

    },

    async down(queryInterface) {
        await queryInterface.dropTable('answers');
    }
};
