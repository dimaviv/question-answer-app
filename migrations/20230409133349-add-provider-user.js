module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('users', 'provider', {
                    type: Sequelize.DataTypes.STRING,
                    defaultValue: null
                }, {transaction: t}),
            ]);
        });
    },
    down: (queryInterface) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('users', 'provider', {transaction: t}),
            ]);
        });
    }
};