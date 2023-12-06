import { Telegraf } from "telegraf";
import homeMessage from "../../buttons/home/message/homeMessage";

const startMessage = async (bot: Telegraf) => {
  
  bot.start(async (ctx) => {
    console.log(ctx);
    homeMessage(ctx);

  });


};

export default startMessage;