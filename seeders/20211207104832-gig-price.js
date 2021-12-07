module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('users', { gig_price: '$1.20' }, { id: 6 });
    await queryInterface.bulkUpdate('users', { gig_price: '$0.05' }, { id: 7 });
    await queryInterface.bulkUpdate('users', { gig_price: '$0.50' }, { id: 8 });
    await queryInterface.bulkUpdate('users', { gig_price: '$1000000' }, { id: 9 });
    await queryInterface.bulkUpdate('users', { gig_price: '$420' }, { id: 10 });
  },

  down: async (queryInterface, Sequelize) => {
    // ????
  },
};
