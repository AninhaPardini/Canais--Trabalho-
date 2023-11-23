const { homeMessage } = require("./home.message.cjs");

const startMessage = (bot) => {

  bot.start((ctx) => homeMessage(ctx));

};

module.exports = { startMessage };