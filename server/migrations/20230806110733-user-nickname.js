module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.transaction(async t => {
            // Rename the 'login' column to 'nickname'
            await queryInterface.renameColumn('users', 'login', 'nickname', {
                transaction: t,
            });

            // Change the data type and constraints of the 'nickname' column
            await queryInterface.changeColumn('users', 'nickname', {
                type: Sequelize.STRING(40),
                allowNull: false,
            }, {
                transaction: t,
            });

            // Add the 'nicknameUpdatedAt' column
            await queryInterface.addColumn('users', 'nicknameUpdatedAt', {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: null,
            }, {
                transaction: t,
            });
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.transaction(async t => {
            // Change the data type of the 'nickname' column
            await queryInterface.changeColumn('users', 'nickname', {
                type: Sequelize.STRING,
            }, {
                transaction: t,
            });

            // Rename the 'nickname' column back to 'login'
            await queryInterface.renameColumn('users', 'nickname', 'login', {
                transaction: t,
            });

            // Remove the 'nicknameUpdatedAt' column
            await queryInterface.removeColumn('users', 'nicknameUpdatedAt', {
                transaction: t,
            });
        });
    }
};