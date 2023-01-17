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
        },{
          username: 'Master Admin',
          email: 'admin@mail.com',
          role: 'admin',
          password:'$2a$10$lqR3E/urr/thuj57Gev5HukUIpbmkt/WoeyS8OtXeSLPPKdwZA28W'
          //SENHA: adminadmin
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
