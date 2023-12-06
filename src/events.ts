import { Telegraf } from "telegraf";
import canaisCategorias from "./Buttons/CanaisCategoria";
import backToHome from "./Buttons/Home";
import infos from "./Buttons/Infos";
import addChannels from "./Buttons/AddChannels";
import startCommand from "./Commands/Start/start.command";
import helpMessage from "./Commands/Help/help.command";
import participarLista from "./Buttons/PaticiparDaLista";
import colectData from "./Messages/addChannel";

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