import { Context } from "telegraf";
import { inlineKeyboard } from "telegraf/typings/markup";

const homeMessage = async (ctx: Context) => {
  // await ctx.deleteMessage();

  await ctx.replyWithPhoto(
    // '👋 Bem vindo ao [Nome do Bot]\n Escolha a opção que deseja realizar comigo!',
    'https://github.com/AninhaPardini/Canais--Trabalho-/blob/main/banner-home.png?raw=true', {
      caption: '👋 Bem vindo ao [Nome do Bot]\n Escolha a opção que deseja realizar comigo!',
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'CANAIS DIVULGADOS POR CATEGORIA', callback_data: 'CANAIS DIVULGADOS POR CATEGORIA' }
          ],
          [
            { text: 'PARTICIPAR DA LISTA', callback_data: 'PARTICIPAR DA LISTA' }
          ],
          [
            { text: 'MAIS INFOS', callback_data: 'MAIS INFOS' }
          ]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      }
    }
    //

    //   source: 'https://github.com/AninhaPardini/Canais--Trabalho-/blob/main/banner-home.png?raw=true',
    //   caption: 'Divulga canais, o melhor bot de lista de canais do Telegram!',
    //   reply_markup: {
    //     inline_keyboard: [
    //       [
    //         { text: 'CANAIS DIVULGADOS POR CATEGORIA', callback_data: 'CANAIS DIVULGADOS POR CATEGORIA' }
    //       ],
    //       [
    //         { text: 'PARTICIPAR DA LISTA', callback_data: 'PARTICIPAR DA LISTA' }
    //       ],
    //       [
    //         { text: 'MAIS INFOS', callback_data: 'MAIS INFOS' }
    //       ]
    //     ],
    //     resize_keyboard: true,
    //     one_time_keyboard: true
    //   },
    // }
  );
}

export default homeMessage;