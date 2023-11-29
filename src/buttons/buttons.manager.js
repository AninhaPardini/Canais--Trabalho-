import addChanneltoListMessage from '../messages/addChannel.message.js';
import channelsCategory from "../messages/channelsCetegory.message.js";
import homeMessage from "../messages/home.message.js";
import infosMessage from '../messages/moreInfos.message.js';

const buttonsManager = (bot) => {
  bot.action('CANAIS DIVULGADOS POR CATEGORIA', (ctx) => {
    channelsCategory(ctx)
  });


  bot.action('PARTICIPAR DA LISTA', (ctx) => {
    addChanneltoListMessage(ctx)
  });

  bot.action('🏠 VOLTAR AO MENU PRINCIPAL', async (ctx) => {
    await ctx.deleteMessage();
    homeMessage(ctx)
  });

  bot.action('ADICIONAR CANAL',);

  bot.action('MAIS INFOS', async (ctx) => {
    infosMessage(ctx);
  });

  bot.action('GERAL', async (ctx) => {
    ctx.reply('LISTA GERAL')
  });

  bot.action('+18', async (ctx) => {
    ctx.reply('LISTA +18')
  });
};

export default buttonsManager;