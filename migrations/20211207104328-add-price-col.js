module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'gig_price',
      {
        type: Sequelize.STRING,
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('gig_price');
  },
};
