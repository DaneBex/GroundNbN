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
        },
        {
          userId: 3,
          address: '5341 NotRl Rd',
          city: 'Usur',
          state: 'Oklahoma',
          country: 'United States',
          name: 'Lake House',
          price: '219',
          image: 'https://aic.azureedge.net/pgl-release/Images/ArticleImages/23/23330.jpg',
          description: "An extraordinarily special, memorable, & remarkable place. Serene, peaceful, isolated, brightest stars - 6.7 miles to Walmart (Colorado Springs) Secluded in The Black Forest - Pet (Everything) friendly - a clear swimming & skating pond, creeks & waterfalls, look-out tower, and more. More than a place to stay -a self-contained outdoor experience.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 8,
          address: '92 Southern Ave',
          city: 'Columbus',
          state: 'Ohio',
          country: 'United States',
          name: 'Sunny Side Home',
          price: '159',
          image: 'https://photos.zillowstatic.com/fp/18f20fb301feef35ab71ed6e4389fe46-p_e.jpg',
          description: "Take it easy at this unique and tranquil getaway. You can enjoy beautiful views of Darby Creek and the land over the water!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          address: '561 McDonell Rd',
          city: 'Ramoin',
          state: 'Nevada',
          country: 'United States',
          name: 'Cool Tranquil Getaway',
          price: '219',
          image: 'https://www.columbusnavigator.com/wp-content/uploads/2019/10/Cook-Rd-1-770x513.jpg',
          description: "Whether you are traveling solo for work, or for recreation with your family, our lovely two bedroom, 1200 square foot guest house is ideal. One of two houses on the property (we live in the other) designed and built in 1920 as a summer residence for a local family. These 5.5 acres of park-like setting are situated on the serene Stillwater River. Tucked away, in the midst of the suburbs, surrounded by trees, gardens and the sound of birds, this gem of a place is a perfect home away from home",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          address: '901 Ressee Ln',
          city: 'Lacos',
          state: 'Oregon',
          country: 'United States',
          name: 'Home of the Hearted',
          price: '349',
          image: "https://static1.housesforsale.com/assets/cover/housesforsalebg.webp",
          description: "House is the original on the street, dated 1904. The house was completely refreshed and rebuilt adding an additional 2200 sq feet for a total of 3500 sq feet. 6 bedrooms and 4 1/2 bath. The house is a relaxing Oasis in the city. The backyard has a gas Fireplace, cedar pergola and pool house with changing room. There is a natural gas grill and heated shower. The pool and hotub with another large firepit feature with seating. You really must see to appreciate this 5 star private backyard",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 10,
          address: '34 Ajijic Rd',
          city: 'Ramos',
          state: 'Aguascalientes',
          country: 'Mexico',
          name: 'Sunny Resort',
          price: '99',
          image: "https://cdn.decoratorist.com/wp-content/uploads/modern-small-mexican-house-designlook-houses-2017-404302.jpg",
          description: "The Cozy Pool House is nestled in a gated family compound of three units, all self-contained and owner-occupied, each with separate entrances, very private and peaceful.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 14,
          address: '9714 Fregan Ln',
          city: 'Inike',
          state: 'Alberta',
          country: 'Canada',
          name: 'Snowy Cabin',
          price: '150',
          image: "https://www.wvlogcabins.com/wp-content/uploads/2020/10/HarmansCabin3_02-scaled.jpg",
          description: "Surrounded by trees, settled right on Lake Hayward sits this charming & cozy cabin in a little cabin community less than half a mile from downtown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 15,
          address: '732 Zumash Dr',
          city: 'Yumuke',
          state: 'Campeche',
          country: 'Mexico',
          name: 'Private Villa',
          price: '250',
          image: "https://static01.nyt.com/images/2020/03/09/realestate/09WYG-CA-slide-JV3D/09WYG-CA-slide-JV3D-mediumSquareAt3X.jpg",
          description: "This chic villa sleeps up to 6 guests comfortably and includes a fully equipped open concept kitchen / living room, 2 bedrooms, a beautiful modern bathroom, a large HD Smart TV with Netflix access, air conditioning and free WIFI.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 13,
          address: '21 Rimine Rd',
          city: 'Pomone',
          state: 'Manitoba',
          country: 'Canada',
          name: 'Come and Fish Aye',
          price: '399',
          image: "https://cdn.vox-cdn.com/thumbor/0eoiN9XqqsSVbiCNo_h0hbUP_yI=/0x0:1023x682/1200x800/filters:focal(431x260:593x422)/cdn.vox-cdn.com/uploads/chorus_image/image/64006695/0b0cd00c_891f_49a5_a75c_cdd640a23020.f10.0.jpg",
          description: "To describe this place in two words: Fire & Water. Crackling fireplaces. A steaming hot tub in the foreground of endless views and sounds of a babbling river. A calming comfort of modern design amenities with natural wood feelings. Enough space to spread, yet slight enough to feel comforted and cared for.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 12,
          address: '325 Josemen Rd',
          city: 'Rihin',
          state: 'Chiapas',
          country: 'Mexico',
          name: 'Home away from Home',
          price: '499',
          image: "https://images.dwell.com/photos-6176523132546707456/6261342158026694656-large/masterfully-architected-rising-glen.jpg",
          description: "Every day is Paradise here! We are Perfect for summer or winter vacations. Beach lovers enjoy our Summer. You are free to walk the beach in either direction for miles and miles! Our large Cedar Deck with log railing wraps around two sides of the cottage and directly overlooks the beach with a gorgeous panoramic view",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:   */
      return queryInterface.bulkDelete('Places', null, {});

  }
};
