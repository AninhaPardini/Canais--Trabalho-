const startMessage = (bot) => {

  bot.start((ctx) => ctx.reply(
    '👋 Bem vindo ao [Nome do Bot]\n Escolha a opção que deseja realizar comigo!', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'CANAIS DIVULGADOS POR CATEGORIA', callback_data: 'CANAIS DIVULGADOS POR CATEGORIA' }
        ],
        [
          { text: 'PARTICIPAR DA LISTA', callback_data: 'PARTICIPAR DA LISTA' }
        ],
        [
          { text: 'MAIS INFOS', callback_data: 'MAIS INFOS' }
        ]
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    },
  }
  ));

};

module.exports = { startMessage };