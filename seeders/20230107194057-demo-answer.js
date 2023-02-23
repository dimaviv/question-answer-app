module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('answers', [
      {
        text: "Відповідь 1",
        questionId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Відповідь 2",
        questionId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Відповідь 3",
        questionId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Відповідь 4",
        questionId: 3,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Відповідь 5",
        questionId: 3,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Відповідь 6",
        questionId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Відповідь 7",
        questionId: 5,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Відповідь 8",
        questionId: 6,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Відповідь 9",
        questionId: 6,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Відповідь 10",
        questionId: 8,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('answers', null, {});
  }
};