module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.changeColumn('users', 'avatar', {
                    type: Sequelize.TEXT

                }, {
                    transaction: t,
                })
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.changeColumn('users', 'avatar', {
                    type: Sequelize.STRING
                }, {
                    transaction: t,
                })
            ]);
        });
    }
};