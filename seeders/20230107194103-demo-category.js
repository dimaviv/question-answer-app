module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name:"Математика",
        image:"49f0bad299687c62334182178bfd75d8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Література",
        image:"38d7355701b6f3760ee49852904319c1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Фізика",
        image:"8d509c28896865f8640f328f30f15721",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Хімія",
        image:"006e29b51675e953a25e7a2d9107abd0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Біологія",
        image:"4a9259b351a93d7f2a67df61c51cd8b2",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};