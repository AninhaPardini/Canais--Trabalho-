import { Context } from "telegraf";
import { prisma } from "../../../../db";
import { InlineKeyboardButton } from "telegraf/typings/core/types/typegram";

/**
 * Esta função envia uma lista de mensagens de canais.
 *
 * @param {Object} ctx - O Contexto da mensagem.
 * @returns {Promise<void>} Uma promessa que resolve quando a mensagem é enviada.
 * @description Mensagem que contém a lista de canais e suas categorias e tem o intuito de ser incluída a função de disparo nos canais;
 * @see {}
 * @since 1.0.0
 */
const entretenimentoReply = async (ctx: Context): Promise<void> => {
  async function getRandomChannels() {
    const channels = await prisma.channel.findMany({
      where: {
        // Verifica se a categoriaId não é nula e é diferente de 6
        category_id: {
          equals: 5,
        },
      },
    });

    // Embaralha o array
    for (let i = channels.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [channels[i], channels[j]] = [channels[j], channels[i]];
    }

    return channels;
  }

  const channels = await getRandomChannels().then((channels) => {
    for (let i = 0; i < channels.length; i++) {
      let channelsList: InlineKeyboardButton[] = [
        {
          text: `${channels[i].title}`,
          callback_data: `${channels[i].title}`,
          url: `${channels[i].link_invite}`,
        },
      ];

      return channelsList;
    }
  });
  if (!channels) {
    return;
  }

  await ctx.reply("Lista dos canais de entretenimento do nosso Bot!", {
    reply_markup: {
      inline_keyboard: [channels.map((channel) => channel)],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
};

export default entretenimentoReply;
