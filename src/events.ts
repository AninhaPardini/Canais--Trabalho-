import { Telegraf } from "telegraf";
import canaisCategorias from "./buttons/canaisCategoria";
import backToHome from "./buttons/home";
import infos from "./buttons/infos";
import addChannels from "./buttons/channels";
import startCommand from "./commands/start/start.command";
import helpMessage from "./commands/help/help.command";
import participarLista from "./buttons/participar";

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