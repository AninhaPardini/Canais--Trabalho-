import { Telegraf } from "telegraf";
import canaisCategorias from "./buttons/canaisCategoria/index";
import backToHome from "./buttons/home/index";
import infos from "./buttons/infos/index";
import addChannels from "./buttons/channels/index";
import startCommand from "./commands/start/start.command";
import helpMessage from "./commands/help/help.command";
import participarLista from "./buttons/participar/index";

const Events = (bot: Telegraf) => {
  startCommand(bot);

  canaisCategorias(bot);

  backToHome(bot);

  infos(bot);

  addChannels(bot);

  participarLista(bot);

  helpMessage(bot);

  // Tratamento de erros

  bot.catch((err, ctx) => {
    console.log(`Ooops, ocorreu um erro para o usuário ${ctx.from?.id}: `, err);
  });
}

export default Events;