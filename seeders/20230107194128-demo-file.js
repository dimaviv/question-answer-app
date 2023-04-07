module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('files', [
      // {
      //   name:"45e14eff23de6ba52c33220d26327ab2.jpg",
      //   extension:"jpg",
      //   questionId: 5,
      //   answerId: null,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name:"35e14eff23de6ba52c33220d26327ab2.jpg",
      //   extension:"jpg",
      //   questionId: 6,
      //   answerId: null,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name:"e01423ff-dfab-4bb0-a352-d5bec428c806.pdf",
      //   extension:"jpg",
      //   questionId: null,
      //   answerId: 7,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name:"a01953ff-dfab-4bb0-a352-d5bec428c806.jpg",
      //   extension:"jpg",
      //   questionId: null,
      //   answerId: 8,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name:"e01953fa-dfab-4bb0-a352-d5bec428c806.docx",
      //   extension:"docx",
      //   questionId: null,
      //   answerId: 8,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name:"3eb8dc1e-ff76-487d-a27f-c85220f20de2.jpg",
      //   extension:"jpg",
      //   questionId: null,
      //   answerId: 9,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name:"7ey8dc1e-bb76-487d-a27f-c85220f20de2.jpg",
      //   extension:"jpg",
      //   questionId: null,
      //   answerId: 9,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name:"64w35481-c450-43bb-9a69-eebf995de37c.jpg",
      //   extension:"jpg",
      //   questionId: null,
      //   answerId: 9,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('files', null, {});
  }
};