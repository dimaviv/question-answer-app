module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('categories', [
      {
        name:"Math",
        image:"49f0bad299687c62334182178bfd75d8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Biology",
        image:"38d7355701b6f3760ee49852904319c1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Chemistry",
        image:"8d509c28896865f8640f328f30f15721",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Computer science",
        image:"006e29b51675e953a25e7a2d9107abd0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"English",
        image:"4a9259b351a93d7f2a67df61c51cd8b2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Physics",
        image:"34182178bfd799687c6235d849f0bad2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Art",
        image:"6233418213f0bad299687c178bfd75d8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Sport",
        image:"8213f0bad233341299687c178bfd75d8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Economy",
        image:"7df61c51cd8b24a9259b351a93d7f2a6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Astronomy",
        image:"7c623344968182178bfd75d89f0bad29",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"All",
        image:"4a9259b351a93d7f2a67df61c51cd8b2",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};