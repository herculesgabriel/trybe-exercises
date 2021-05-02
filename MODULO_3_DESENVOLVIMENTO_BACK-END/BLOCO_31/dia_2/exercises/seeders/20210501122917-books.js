'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Dark Man',
        author: 'John Doe',
        pageQuantity: 327,
      },
      {
        title: 'Comedy in Central Perk',
        author: 'Friendly People',
        pageQuantity: 214,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
