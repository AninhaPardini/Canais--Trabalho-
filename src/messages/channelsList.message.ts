import { Context } from "telegraf";

/**
 * Esta função envia uma lista de mensagens de canais.
 * 
 * @param {Object} ctx - O Contexto da mensagem.
 * @returns {Promise<void>} Uma promessa que resolve quando a mensagem é enviada.
 * @description Mensagem que contém a lista de canais e suas categorias e tem o intuito de ser incluída a função de disparo nos canais;
 * @see {}
 * @since 1.0.0
 */
const channelListMessage = async (ctx: Context): Promise<void> => {
  await ctx.deleteMessage();

  await ctx.reply('Messages');
}

export default channelListMessage;