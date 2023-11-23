const addChanneltoListMessage = (ctx) => {
  ctx.reply('✋ Antes de tudo...\n• Seu canal deve ter pelo menos 200 inscritos para entrar na lista.\n\n❓ Como participar?\nÉ necessário me adicionar em seu canal e me conceder as seguintes permissões:\n✅ Postar Mensagens\n✅ Editar Mensagens de Outros\n✅ Apagar Mensagens de Outros\n✅ Convidar Usuários via Link', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'ADICIONAR CANAL', callback_data: 'ADICIONAR CANAL' }
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

module.exports = { addChanneltoListMessage };