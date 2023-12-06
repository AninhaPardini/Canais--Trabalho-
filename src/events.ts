import { Telegraf } from "telegraf";
import startMessage from "./commands/start/start.command";
import canaisCategorias from "./buttons/categorias";
import backToHome from "./buttons/home";
import infos from "./buttons/Infos";
import addChannels from "./buttons/channels";
import helpMessage from "./commands/help/help.command";



const Events = (bot: Telegraf) => {
  startMessage(bot);

  canaisCategorias(bot);

  backToHome(bot);

  infos(bot);

  addChannels(bot);

  helpMessage(bot);

  // Tratamento de erros

  bot.catch((err, ctx) => {
    console.log(`Ooops, ocorreu um erro para o usuário ${ctx.from?.id}: `, err);
  });
}

export default Events;