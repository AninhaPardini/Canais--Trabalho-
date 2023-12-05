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
const generalListCategory = async (ctx: Context): Promise<void> => {
  async function getRandomChannels() {
    const categories = await prisma.category.findMany({
      where: {
        // Verifica se a categoriaId não é nula e é diferente de 6
        id: {
          not: 6,
        },
      },
      select: {
        name: true,
      },
    });

    // Embaralha o array
    for (let i = categories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [categories[i], categories[j]] = [categories[j], categories[i]];
    }

    return categories;
  }

  const categories = await getRandomChannels().then((categories) => {
    for (let i = 0; i < categories.length; i++) {
      let categoriesList: InlineKeyboardButton[] = [
        {
          text: `${categories[i].name}`,
          callback_data: `${categories[i].name}`,
        },
      ];

      return categoriesList;
    }
  });
  if (!categories) {
    return;
  }

  await ctx.reply("Confira a lista das categorias que temos:", {
    reply_markup: {
      inline_keyboard: [categories.map((category) => category)],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
};

export default generalListCategory;
