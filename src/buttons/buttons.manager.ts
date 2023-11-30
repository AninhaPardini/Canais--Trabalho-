import { Context, Telegraf } from 'telegraf';
import addChanneltoListMessage from '../messages/addChannel.message.js';
import channelsCategory from "../messages/channelsCetegory.message.js";
import homeMessage from "../messages/home.message.js";
import infosMessage from '../messages/moreInfos.message.js';


const buttonsManager = (bot: Telegraf) => {
  bot.action('CANAIS DIVULGADOS POR CATEGORIA', (ctx: Context) => {
    channelsCategory(ctx)
  });


  bot.action('PARTICIPAR DA LISTA', (ctx: Context) => {
    addChanneltoListMessage(ctx)
  });

  bot.action('🏠 VOLTAR AO MENU PRINCIPAL', async (ctx: Context) => {
    await ctx.deleteMessage();
    homeMessage(ctx)
  });

  bot.action('ADICIONAR CANAL', (ctx: Context) => {

    ctx.reply('texto de adicionar canal')
  });

  bot.action('MAIS INFOS', async (ctx: Context) => {
    infosMessage(ctx);
  });

  bot.action('GERAL', async (ctx: Context) => {
    ctx.reply('LISTA GERAL')
  });

  bot.action('+18', async (ctx: Context) => {
    ctx.reply('LISTA +18')
  });
};

export default buttonsManager;