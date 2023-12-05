import { Context, Telegraf } from "telegraf";
import homeMessage from "./message/homeMessage";

const backToHome = async (bot: Telegraf) => {
  bot.action('🏠 VOLTAR AO MENU PRINCIPAL', async (ctx: Context) => {
    await ctx.deleteMessage();
    homeMessage(ctx);
  });
}

export default backToHome;