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
          description: 'Kick back on a plush day bed at this deluxe, contemporary getaway in coveted Travis Heights. Take a cooling afternoon dip in the heated pool surrounded by tropical plants, designer outdoor furniture and mature landscaping. The Getaway is just four blocks to vibrant South Congress shopping and restaurants. Experience design delights in a tranquil resort setting.',
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
          description: 'This cozy studio condo in Girdwood boasts a private hot tub, deck, and large windows giving way to tranquil glacier views. While attached to a home, this rental has its own private entrance and bathroom.',
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
          description: 'It will do fine if you desperately need a place to stay',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          address: '4313 Imaginary Lane',
          city: 'Frost Hill',
          state: 'Utah',
          country: 'United States',
          name: "Hilly Home",
          price: 139,
          image: 'https://img.ksl.com/mx/mplace-homes.ksl.com/homes-buy-new-background-1616079568580.png?width=1200&height=630',
          description: "Adorable apartment with private entrance in the historic Salt Lake Avenues district. Panoramic views of the city and mountains. 5 minutes to downtown, 5 minutes to shopping and restaurants (Whole Foods, Trader Joe's, etc). Off street parking if you have a car; there is also a bus stop across the street on the corner. One block to open space and miles of running/biking trails.",
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
