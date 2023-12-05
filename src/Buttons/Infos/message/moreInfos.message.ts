import { Context } from "telegraf";

const infosMessage = async (ctx:Context) => {
  await ctx.deleteMessage();

  await ctx.replyWithMarkdownV2(
    'Manual de como usar o @DivulgaListaBot',
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🏠 VOLTAR AO MENU PRINCIPAL', callback_data: '🏠 VOLTAR AO MENU PRINCIPAL' }
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      },
    }
  );
}

export default infosMessage;