module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('comments', [
            {
                text: "Aasdasd sdsdkjhfaehj easjfgsajekhf",
                questionId: 2,
                answerId: null,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                text: "kjsdhfgklj dsjfkghk dsfjkgh ghgg",
                questionId: null,
                answerId: 1,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                text: "dfsgdsfgl sdfgdsfg",
                questionId: null,
                answerId: 1,
                userId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                text: "sdfgsdfgdfg",
                questionId: 4,
                answerId: null,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                text: "asdfretertdvcb",
                questionId: null,
                answerId: 2,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                text: "sdfsdgds dfsg",
                questionId: null,
                answerId: 2,
                userId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ]);
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('comments', null, {});
    }
};