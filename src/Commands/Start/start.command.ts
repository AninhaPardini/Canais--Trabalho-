import { Telegraf } from "telegraf";
import homeMessage from "../../Buttons/Home/message/homeMessage";

const startMessage = async (bot: Telegraf) => {
  
  bot.start(async (ctx) => {
    console.log(ctx);
    homeMessage(ctx);

  });


};

export default startMessage;