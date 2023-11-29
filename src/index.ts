import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import * as dotenv from 'dotenv';
import startMessage from './messages/start.command';
import buttonsManager from './buttons/buttons.manager';
import helpMessage from './messages/help.command';
import { keyboard } from 'telegraf/typings/markup';

dotenv.config();

const token: string | undefined = process.env.TOKEN;
if (!token) {
  throw new Error('"TOKEN" env var is required!');
}

const bot = new Telegraf(token);

startMessage(bot);
buttonsManager(bot);
helpMessage(bot);

bot.telegram.getMe().then((bot) => {
  if(bot.is_bot) {
    console.log(`O bot ${bot.username} com o id ${bot.id} está online!`)
  }

})

bot.use((ctx) => {
  const chatId: any = ctx.chat?.id;
  const botId: number = 6937764087;
  console.log(bot.telegram)
  
  // #TODO: Fazer exception e corrigir erro quando bot sai do server
  const isMember = ctx.getChatMember(botId).then(async (member) => {
    if (member.status != 'kicked') {
      const membersCount = await ctx.getChatMembersCount().then((chat) => {
        const totalMembers: number = chat;
        return console.log(totalMembers);
      })
      const chatInfo = await ctx.telegram.getChat(chatId);

      // Verificar se o chat é um canal
      if (chatInfo.type === 'channel') {
        const channelId = chatInfo.id
        const channelTitle = chatInfo.invite_link
        const inviteLink = `https://t.me/${chatInfo.username}`;

        try {
          await ctx.telegram.sendMessage(
            channelId,
            'Olá! Eu sou um bot e acabei de entrar neste canal. Seja bem-vindo!'
          );
        } catch (error) {
          console.error('Erro ao enviar mensagem de boas-vindas:', error);
        }

        console.log(`O link de convite para o canal "${chatInfo.title}" é: ${inviteLink}`);
      } else {
        console.log('Este chat não é um canal.');
      }

      
    
    } else {
      console.log('O bot não se encontra mais neste servidor')
    }
  });
  
  return isMember;
  
})


/*
bot.use((ctx) => {
  const chatInfo: any = ctx.channelPost?.chat.username;
  const chatType: string | undefined = ctx.chat?.type;
  const channelTitle: string | undefined = ctx.channelPost?.chat.title;
  const channelMembers: any = ctx.channelPost?.chat;
  const channelLink: string | undefined = ctx.myChatMember?.invite_link?.invite_link;
  // if (!token || !channelLink || channelTitle) {
  //   throw new Error('Algumas informações estão faltando');
  // }

  // Armazene o chatId em seu banco de dados ou em algum lugar
  // onde você possa recuperá-lo posteriormente.
  console.log(`Tipo de chat: ${chatType},\n Titulo: "${channelTitle}"\n Id do chat: ${chatId}\n Link: ${channelLink}\n Membros ${channelMembers}\n Chat ${chatInfo}`);
});
*/


// Start no bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));

// default to port 3000 if PORT is not set
const port: number = Number(process.env.PORT) || 3000;

// assert and refuse to start bot if token or webhookDomain is not passed
if (!token) {
  throw new Error('"BOT_TOKEN" env var is required!');
}
// if (!process.env.WEBHOOK_DOMAIN) throw new Error('"WEBHOOK_DOMAIN" env var is required!');

process.once('SIGTERM', () => bot.stop('SIGTERM'));
