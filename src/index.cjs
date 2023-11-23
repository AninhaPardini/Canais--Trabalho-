const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const { buttonsManager } = require('./buttons/buttons.manager.cjs');
const { startMessage } = require('./messages/start.message.cjs');
const { helpMessage } = require('./messages/help.message.cjs');


// bot.command('help', (ctx) => ctx.reply('Uma breve instrução sobre o bot e requisitos'));
startMessage(bot);
buttonsManager(bot);
helpMessage(bot);

// Start no bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));