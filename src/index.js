import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import * as dotenv from 'dotenv';
dotenv.config();

import startMessage from './messages/start.message.js';
import buttonsManager from './buttons/buttons.manager.js';
import helpMessage from './messages/help.message.js';

const token = process.env.TOKEN;
const bot = new Telegraf(token);

// bot.command('help', (ctx) => ctx.reply('Uma breve instrução sobre o bot e requisitos'));
startMessage(bot);
buttonsManager(bot);
helpMessage(bot);
// bot.command('clear', (ctx) => {
//   let k = 0;
//   for (let i = 0; i <= 100; i++) {
//     k = ctx.message.message_id - i;
//     ctx.deleteMessage(k)
//   }
// });

// Start no bot
bot.launch();
bot.on(console.log('✅ Bot on'))

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));

// default to port 3000 if PORT is not set
const port = Number(process.env.PORT) || 3000;

// assert and refuse to start bot if token or webhookDomain is not passed
if (!token) throw new Error('"BOT_TOKEN" env var is required!');
// if (!process.env.WEBHOOK_DOMAIN) throw new Error('"WEBHOOK_DOMAIN" env var is required!');

process.once('SIGTERM', () => bot.stop('SIGTERM'));