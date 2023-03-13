'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('comments', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            text: {type: Sequelize.TEXT, allowNull: false},
        });

    },

    async down(queryInterface) {
        await queryInterface.dropTable('comments');
    }
};
