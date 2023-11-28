const addChanneltoListMessage = async (ctx) => {
  await ctx.deleteMessage();

  await ctx.replyWithMarkdown(
    `✋ *Antes de tudo...*\n• Seu canal deve ter pelo menos 100 inscritos para entrar na lista.\n\n❓ *Como participar?*\nÉ necessário me adicionar em seu canal e me conceder as seguintes permissões:\n\n✅ Postar Mensagens\n✅ Editar Mensagens de Outros\n✅ Apagar Mensagens de Outros\n✅ Convidar Usuários via Link`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'ADICIONAR CANAL', url: 'http://t.me/TesteEFrancisBot?startchannel&admin=post_messages+edit_messages+delete_messages+invite_users+pin_messages+manager_chat' }
          ],
          [
            { text: '🏠 VOLTAR AO MENU PRINCIPAL', callback_data: '🏠 VOLTAR AO MENU PRINCIPAL' }
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      },
    });
}

export default addChanneltoListMessage;