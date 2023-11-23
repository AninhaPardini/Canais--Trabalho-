const { homeMessage } = require("../messages/home.message.cjs");

const buttonsManager = (bot) => {
  bot.action('CANAIS DIVULGADOS POR CATEGORIA', (ctx) => {
    ctx.reply('Uma lista com dois botões\n1. Geral\n+18', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'GERAL', callback_data: '+18' }
          ],
          [
            { text: '🏠 VOLTAR AO MENU PRINCIPAL', callback_data: '🏠 VOLTAR AO MENU PRINCIPAL' }
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      },
    });
  });

  bot.action('PARTICIPAR DA LISTA', (ctx) => {

  });

  bot.action('🏠 VOLTAR AO MENU PRINCIPAL', (ctx) => {
    homeMessage(ctx)
  });
};

module.exports = { buttonsManager };