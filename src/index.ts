import { Context, Telegraf } from "telegraf";
import * as dotenv from "dotenv";
import colectUserInfos from "./Middlewares/colectUserInfos";
import Events from "./events";

dotenv.config();

const token: string | undefined = process.env.TOKEN;
if (!token) {
  throw new Error('"TOKEN" env var is required!');
}

const bot = new Telegraf(token);

colectUserInfos(bot);

bot.telegram.getMe().then((bot) => {
  if (bot.is_bot) {
    console.log(`✅ O bot ${bot.username} com o id ${bot.id} está online!`);
  }
});

colectUserInfos(bot);

Events(bot);

// Start no bot
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));

// default to port 3000 if PORT is not set
const port: number = Number(process.env.PORT) || 3000;

// assert and refuse to start bot if token or webhookDomain is not passed
if (!token) {
  throw new Error('"BOT_TOKEN" env var is required!');
}
// if (!process.env.WEBHOOK_DOMAIN) throw new Error('"WEBHOOK_DOMAIN" env var is required!');

process.once("SIGTERM", () => bot.stop("SIGTERM"));
