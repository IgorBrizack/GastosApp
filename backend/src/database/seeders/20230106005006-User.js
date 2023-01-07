module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'Igor Brizack',
          email: 'igorbrizack@mail.com',
          role: 'user',
          password:'$2a$10$Jcay1UqjS7DI3roayiK0ZuOUiGcnTpquBKanXPtVg9uop17vLJUNK'
          //SENHA: resolvaminhaquery
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
