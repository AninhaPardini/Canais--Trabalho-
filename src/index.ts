import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import * as dotenv from 'dotenv';
import startMessage from './messages/start.command';
import buttonsManager from './buttons/buttons.manager';
import helpMessage from './messages/help.command';
import { prisma } from './db';

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

bot.use(async (ctx) => {
  const chatId: any = ctx.chat?.id;
  const botId: number = 6937764087;
  console.log(bot.telegram)

 // const isMember2 = (await ctx.getChatMember(botId)).status.includes('kicked') ? 
  const member = (await ctx.getChatMember(botId))
  if (member.status === 'kicked' || member.status === 'left') {
    return; // 
  } 
  const chatInfo = await ctx.telegram.getChat(chatId);

  // Verificar se o chat é um canal
  if (chatInfo.type != 'channel') {
    return;

  }
  const membersCount = (await ctx.getChatMembersCount());
  
  if(process.env.NODE_ENV === "production" && membersCount < 100) {
    return;
  }

  const channelId = chatInfo.id;
  const channelTitle = chatInfo.title;
  const isPrivateChannel = chatInfo.has_protected_content ? 'privado' : 'público';
  const inviteLink = chatInfo.invite_link;
  
  await prisma.channel.create({
    data: {
      channel_chat_id: channelId.toString(),
      
    }
  })
});

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
