
/**
 * Esta função envia uma lista de mensagens de canais.
 * @author Aninha Pardini
 * @param {Object} bot - O bot que está enviando a mensagem.
 * @returns {Promise<void>} Uma promessa que resolve quando a mensagem é enviada.
 * @description Mensagem que contém a lista de canais e suas categorias e tem o intuito de ser incluída a função de disparo nos canais;
 * @see 
 * @since 1.0.0
 */
const channelListMessage = async (bot) => {
  await ctx.deleteMessage();

  await bot.reply((ctx) => ctx.reply('Messages'))
}

export default channelListMessage;