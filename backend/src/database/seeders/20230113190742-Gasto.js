module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'gastos',
      [
        {
          user_id: 1,
          type: 'lazer',
          value: 100,
          gasto_date: '0000/00/00'
        },{
          user_id: 1,
          type: 'educacao',
          value: 100,
          gasto_date: '0000/00/00'
        },{
          user_id: 1,
          type: 'investimento',
          value: 100,
          gasto_date: '0000/00/00'
        },{
          user_id: 1,
          type: 'servico',
          value: 100,
          gasto_date: '0000/00/00'
        },{
          user_id: 1,
          type: 'alimentacao',
          value: 100,
          gasto_date: '0000/00/00'
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('gastos', null, {});
  },
};
