'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkInsert('Places', [
        {
          userId: 7,
          address: '4234 Lexington Ave',
          city: 'Houston',
          state: 'Texas',
          country: 'United States',
          name: 'Fine Estate',
          price: 139,
          image: 'https://www.texas-homes.com/sites/default/files/styles/neighborhood_teaser/public/2021-02/StevensRanch_GRT-UPST_print2.jpg?itok=E99eYG85',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          address: '8923 NotReal Lane',
          city: 'Anchorage',
          state: 'Alaska',
          country: 'United States',
          name: 'Snowy Peak',
          price: 249,
          image: 'https://hawkinsonak.net/wp-content/uploads/2018/04/Hobbit_032.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 9,
          address: '231 Forest Knoll Park',
          city: 'Madison',
          state: 'Wisconsin',
          country: 'United States',
          name: "It's a place",
          price: 49,
          image: 'https://i0.wp.com/oldhousesunder50k.com/wp-content/uploads/2020/02/7262e.jpg?w=1024&ssl=1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 12,
          address: '4313 Imaginary Lane',
          city: 'Frost Hill',
          state: 'Utah',
          country: 'United States',
          name: "Hilly Home",
          price: 139,
          image: 'https://img.ksl.com/mx/mplace-homes.ksl.com/homes-buy-new-background-1616079568580.png?width=1200&height=630',
          createdAt: new Date(),
          updatedAt: new Date()
        }
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
