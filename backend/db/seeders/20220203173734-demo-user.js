'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'richardFix@user.io',
        username: 'RoddieRichard',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'miketrout@user.io',
        username: 'Miketrouber',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'LiamQuaw@user.io',
        username: 'Liantrophist',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'RoganOlson@user.io',
        username: 'Rogolson',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'LutherRick@user.io',
        username: 'Lextomorpo',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Pauline@user.io',
        username: 'PaulineHatesCats',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'NoelFinki@user.io',
        username: 'Christmasnoel',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'TylerDurden@user.io',
        username: 'TylerDurden',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'CampellPOpe@user.io',
        username: 'DaPopeCamp',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'RyanFizerd@user.io',
        username: 'RiRi',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'daveomose@user.io',
        username: 'Steve-o-dave-o',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'momoney@user.io',
        username: 'imHomeless',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
