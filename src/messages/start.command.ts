import { Telegraf } from "telegraf";
import homeMessage from "./home.message";

export const startMessage = (bot: Telegraf) => {

  bot.start(async (ctx) => {
    console.log(ctx);
    homeMessage(ctx);

  });

};

export default startMessage;