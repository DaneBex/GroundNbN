'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:   */
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 4,
          placeId: 3,
          review: "The house was beautiful and clean. I appreciate how there were plenty of towels. Everything was well labeled so we could easily find supplies. I would be happy to stay here again.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          placeId: 2,
          review: "Don’t hesitate on this perfect location. Everything in this GroundNbN was perfectly considered. It had all that we needed, was very comfortable, spotlessly clean, amazing location, easy access in and out, great communication and easy.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 7,
          placeId: 6,
          review: "Second time staying here. They are wonderful and accommodating. Just a short walk from downtown.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 9,
          placeId: 1,
          review: "This house was adorable. It was clean and modern, and all of the extra touches made us feel so welcome.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
