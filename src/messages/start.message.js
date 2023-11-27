import homeMessage from "./home.message.js";

export const startMessage = (bot) => {

  bot.start(async (ctx) => {
    console.log(ctx);
    homeMessage(ctx);

  });

};

export default startMessage;