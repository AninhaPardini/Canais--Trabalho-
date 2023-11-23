const helpMessage = (bot) => {
  bot.help((ctx) => ctx.reply(
    'Manual de como usar o @BotCanais\n\n'
  ));
};

module.exports = { helpMessage }