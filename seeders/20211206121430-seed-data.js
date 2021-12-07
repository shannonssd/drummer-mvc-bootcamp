module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersList = [
      {
        name: 'Pablo',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Eric',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Van Haal',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Thiago',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Peterson',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const users = await queryInterface.bulkInsert('users', usersList, { returning: true });

    const reservationList = [
      {
        date: '2021-12-01',
        user_id: users[0].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: '2022-02-10',
        user_id: users[3].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: '2022-01-10',
        user_id: users[2].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: '2022-10-11',
        user_id: users[4].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    queryInterface.bulkInsert('reservations', reservationList);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reservations', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
