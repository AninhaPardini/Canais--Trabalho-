import addChanneltoListMessage from '../messages/addChannel.message.js';
import channelsCategory from "../messages/channelsCetegory.message.js";
import homeMessage from "../messages/home.message.js";

const buttonsManager = (bot) => {
  bot.action('CANAIS DIVULGADOS POR CATEGORIA', (ctx) => {
    channelsCategory(ctx)
  });


  bot.action('PARTICIPAR DA LISTA', (ctx) => {
    addChanneltoListMessage(ctx)
  });

  bot.action('🏠 VOLTAR AO MENU PRINCIPAL', (ctx) => {
    ctx.deleteMessage();
    homeMessage(ctx)
  });

  bot.action('ADICIONAR CANAL', )
};

export default buttonsManager;