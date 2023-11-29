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
  ctx.replyWithMarkdownV2('',
    {

    });
}