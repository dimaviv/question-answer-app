module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('votes', [
            {
                vote: -1,
                questionId: 1,
                answerId: null,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                vote: 1,
                questionId: 1,
                answerId: null,
                userId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                vote: 1,
                questionId: 1,
                answerId: null,
                userId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                vote: 1,
                questionId: 1,
                answerId: null,
                userId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                vote: 1,
                questionId: null,
                answerId: 1,
                userId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                vote: 1,
                questionId: null,
                answerId: 1,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                vote: 1,
                questionId: null,
                answerId: 1,
                userId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                vote: 1,
                questionId: null,
                answerId: 1,
                userId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                vote: -1,
                questionId: null,
                answerId: 1,
                userId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ]);
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('votes', null, {});
    }
};