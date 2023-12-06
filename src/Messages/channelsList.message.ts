import * as Telegraf from "telegraf";

const channelListMessage = async (bot) => {
  await ctx.deleteMessage();

  await bot.reply((ctx) => ctx.reply(''))
}

export default channelListMessage;