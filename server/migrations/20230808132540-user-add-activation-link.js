module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('users', 'activationLink', {
            type: Sequelize.STRING, // Adjust the data type as needed
        });
        await queryInterface.addColumn('users', 'isActivated', {
            type: Sequelize.BOOLEAN, // Adjust the data type as needed
            defaultValue: false, // Adjust the nullability as needed
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('users', 'activationLink');
        await queryInterface.removeColumn('users', 'isActivated');
    }
};
