import { Telegraf } from "telegraf";
import canaisCategorias from "./Buttons/CanaisCategoria";
import backToHome from "./Buttons/Home";
import infos from "./Buttons/Infos";
import addChannels from "./Buttons/AddChannels";
import startCommand from "./Commands/Start/start.command";
import helpMessage from "./Commands/Help/help.command";
import participarLista from "./Buttons/PaticiparDaLista";

const Events = (bot: Telegraf) => {
  startCommand(bot);

  canaisCategorias(bot);

  backToHome(bot);

  infos(bot);

  addChannels(bot);

  participarLista(bot);

  helpMessage(bot);
}

export default Events;