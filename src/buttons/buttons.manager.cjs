const buttonsManager = (bot) => {
  bot.action('CANAIS DIVULGADOS POR CATEGORIA', (ctx) => {
    ctx.reply('Uma lista com dois botões\n1. Geral\n+18');
  });

  bot.action('PARTICIPAR DA LISTA', (ctx) => {
    ctx.reply('✋ Antes de tudo...\n• Seu canal deve ter pelo menos 200 inscritos para entrar na lista.\n\n❓ Como participar?\nÉ necessário me adicionar em seu canal e me conceder as seguintes permissões:\n✅ Postar Mensagens\n✅ Editar Mensagens de Outros\n✅ Apagar Mensagens de Outros\n✅ Convidar Usuários via Link');
  });
};

module.exports = { buttonsManager };