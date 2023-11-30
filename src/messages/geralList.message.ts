import { Context } from "telegraf"

/**
 * Esta função envia uma lista de mensagens de canais.
 * @author Aninha Pardini
 * @param {Object} ctx -  O contexto de uma mensagem.
 * @returns {Promise<void>} Uma promessa que resolve quando a mensagem é enviada.
 * @description Contexto que contém a mensagem de Lista da categoria Geral de canais;
 * @since 1.0.0
 */
const geralList = async (ctx: Context): Promise<void> => {
  ctx.deleteMessage();
  ctx.replyWithMarkdownV2('Confira aqui a lista geral dos canais do Divulga lista!', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: '', url: '' }
        ], // provavel com use um for aqui
        [
          { text: 'AVANÇAR', callback_data: 'AVANÇAR'},
          { text: 'VOLTAR', callback_data: 'VOLTAR'}
        ],
        [
          { text: '🏠 VOLTAR AO MENU PRINCIPAL', callback_data: '🏠 VOLTAR AO MENU PRINCIPAL' }
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  });
}

export default geralList;