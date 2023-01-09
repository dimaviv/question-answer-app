module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('users', [{
            login: 'churpasov',
            email: 'chuprasov1959@ukr.net',
            password: '123',
            avatar: 'aasdasd1',
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                login: 'hornedtoad',
                email: 'hornedtoad@ukr.net',
                password: '123',
                avatar: 'asdasd2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                login: 'lutzer',
                email: 'lutzer4klbb@ukr.net',
                password: '123',
                avatar: 'asdasd3',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                login: '5bird',
                email: '5bird@ukr.net',
                password: '123',
                avatar: 'asdasd4',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                login: 'test',
                email: 'test@ukr.net',
                password: '123',
                avatar: 'asddas5',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

        down: (queryInterface) => {
            return queryInterface.bulkDelete('users', null, {});
        }
    };