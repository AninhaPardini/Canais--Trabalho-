import { Context, Telegraf } from 'telegraf';
import categoriesBranches from './messages/categoriesBranches';
import generalListCategory from './messages/general/generalCategoryList';
import negociosReply from './messages/general/negociosReply';
import diversosReply from './messages/general/diversosReply';
import entretenimentoReply from './messages/general/entretenimentoReply';
import estudosReply from './messages/general/estudosReply';
import tecnologiaReply from './messages/general/tecnologiasReply';
import moreEighteenCategory from './messages/nfsw/moreEighteenCategoryList';

const canaisCategorias = (bot: Telegraf) => {
  bot.action('CANAIS DIVULGADOS POR CATEGORIA', (ctx: Context) => {
    categoriesBranches(ctx);
  });

  bot.action('GERAL', async (ctx: Context) => {
    generalListCategory(ctx);
  });

  bot.action('+18', async (ctx: Context) => {
    moreEighteenCategory(ctx);
  });

  bot.action('NEGÓCIOS', async (ctx: Context) => {
    negociosReply(ctx);
  });

  bot.action('DIVERSOS', async (ctx: Context) => {
    diversosReply(ctx);
  });

  bot.action('ENTRETENIMENTO', async (ctx: Context) => {
    entretenimentoReply(ctx);
  });

  bot.action('ESTUDOS', async (ctx: Context) => {
    estudosReply(ctx);
  });

  bot.action('TECNOLOGIA', async (ctx: Context) => {
    tecnologiaReply(ctx);
  });

}

export default canaisCategorias;