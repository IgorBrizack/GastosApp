module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'Igor Brizack',
          email: 'igorbrizack@mail.com',
          role: 'user',
          password:'password'
          //SENHA: matheustectrybe
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
