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
        {
          userId: 11,
          placeId: 1,
          review: "This was such a cozy and fun cabin to stay in! My wife and I thoroughly enjoyed a relaxing and laid-back honeymoon here.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 12,
          placeId: 2,
          review: " Like any rental there are pros and cons but overall we had a very pleasant stay! Rogan communicated with me early on and check in/out was simple",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 13,
          placeId: 3,
          review: "Horrible exprience. Do not recommend",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 14,
          placeId: 4,
          review: "Beautiful house, very clean and more than what I expected. Would come back and definitely recommend it.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 15,
          placeId: 5,
          review: "Obsessed with this gorgeous it was an incredible experience and easy to navigate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          placeId: 6,
          review: "The kitchen is well stocked if you want to cook.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          placeId: 7,
          review: "Amazing house! The interiors, views, and location are excellent. We will definitely return to this one.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          placeId: 8,
          review: "We had a wonderful time here. The owner's friend showed us around, gave us some great hiking suggestions, and checked in on us via text. We felt very welcomed.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          placeId: 9,
          review: "The wildlife was amazing. We had a very friendly fox come visit each day and lots of deer and birds to see.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          placeId: 10,
          review: "such a fantastic house. it’s an entire vibe. the decor in every room is just an artists dream.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 6,
          placeId: 11,
          review: "Not a fun stay, rude host",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 7,
          placeId: 12,
          review: "Our only regret about this stay was that we didn’t book longer. The house is incredible.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 8,
          placeId: 13,
          review: "A really unique and fun place to stay!!! View during the day and at night is hard to beat!!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 9,
          placeId: 14,
          review: "This place is so unique and such a fantastic vacation spot",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 10,
          placeId: 15,
          review: "A+ Great property. As described.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 11,
          placeId: 16,
          review: "It was a magical time staying here. This is more than a great GroundNbN, it’s a truly unique experience. Highly recommend.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 12,
          placeId: 17,
          review: "I truly enjoyed staying in this home. It was a quiet solo trip that allowed me to refresh before a busier season of life started.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 13,
          placeId: 18,
          review: "What an opportunity to experience a self-sustaining ecological home and what should be the standard for home building. I would definitely recommend this place.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 14,
          placeId: 19,
          review: "Wow, one of the coolest places I have ever stayed. This is what the GroundNbN experience is all about. ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 15,
          placeId: 20,
          review: "Loved this place! It's warm, cozy, unique and fun.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          placeId: 21,
          review: "Had a great stay and loved, loved the lighting, materials, and aesthetic of this home.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          placeId: 24,
          review: "We absolutely loved our stay at the earthship and will definitely be back! Very quick to respond and helpful, our wifi connection was great, the views were spectacular.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          placeId: 22,
          review: "Such a cool place to stay :)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          placeId: 23,
          review: "Great place, easy to get to, easy check in. I’ll def be making a trip back to learn more. 2 nights was not enough to take it all in. Highly recommend!",
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
