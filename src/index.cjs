import { buttonsManager } from './buttons/buttons.manager.cjs';

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();
const { startMessage } = require('./messages/start.message.cjs')

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('help', (ctx) => ctx.reply('Uma breve instrução sobre o bot e requisitos'));
startMessage(bot);
buttonsManager(bot);

// Start no bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));