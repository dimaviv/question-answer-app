module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('questions', [
      {
        text: "Исследовать функцию на локальные экстремумы : z = x^2+y^2+2y-6x-4xy",
        categoryId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Визначте графічно кількість коренів рівняння:\n" +
            "X8=4-x\n" +
            "X5=5-2x",
        categoryId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Знайдіть об'єм куба, ребро якого дорівнює 2 1/3",
        categoryId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Хто із героїв \"Вільшан зілля\" має міфологічний світогляд,аргументувати",
        categoryId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Написати власні рубаї",
        categoryId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Чим відрізняється відбивання світла від червоного і білого паперу?",
        categoryId: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Поясніть, що буде спостерігатися під час досліду, показаного на рисунку, під час замикання і розмикання ключа.(фото)",
        categoryId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Позначте на рисунку магнітні полюси котушки зі струмом. Опишіть поведінку кожного магніту після замикання ключа.(фото)",
        categoryId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Знайти інтенсивність навантаження q, при якому момент в жорсткому кріпленні А дорівнює 400 Н*м, якщо розміри АВ = 2 м, ВС = 4 м.",
        categoryId: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Допишіть рівняння і у молекулярній, повній та скороченій іонній формах: A) Na2CO3+BaCl2=\n" +
            "б) FeS +HCl=\n" +
            "B) CuSO4+KOH=",
        categoryId: 4,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Розділити суміш речовин: залізні ошурки, пісок, сіль.",
        categoryId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('questions', null, {});
  }
};