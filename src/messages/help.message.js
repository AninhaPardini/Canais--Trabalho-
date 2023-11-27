const helpMessage = async (bot) => {

  await bot.help(async (ctx) => {
    await ctx.deleteMessage();

    await ctx.reply(
      'Manual de como usar o @BotCanais\n\n'
    )
  });
};

export default helpMessage;