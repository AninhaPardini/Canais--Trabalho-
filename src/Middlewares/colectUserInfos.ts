import { Context, Telegraf } from "telegraf";
import validatorChatId from "./validatorChatId";
import validatorMember from "./validatorMember";
import { prisma } from "../db";

const colectUserInfos = async (bot: Telegraf) => {
  bot.use(async (ctx, next) => {
    const botId = ctx.botInfo?.id;

    const hasUserId = ctx.from?.id;
    if (hasUserId === undefined) {
      return;
    }
    const userId = hasUserId;
    const userName = ctx.from?.username;
    const firstName = ctx.from?.first_name;
    const lastName = ctx.from?.last_name;
    const userLanguage = ctx.from?.language_code;
    const userChatId = ctx.message?.chat.id;
    const userChatType = ctx.message?.chat.type;
    const userDate = ctx.message?.date;
    const chatId = validatorChatId(ctx);
    if (chatId === undefined) {
      return;
    }

    console.log(userId);
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
    console.log(userLanguage);

    const chatInfo = await ctx.telegram.getChat(chatId);
    if (chatInfo.type != "channel") {
      return;
    }

    const membersCount = await ctx.getChatMembersCount();
    console.log(`O canal tem: ${membersCount} membros!`);

    if (process.env.NODE_ENV === "production" && membersCount < 100) {
      return ctx.reply(
        "Você precisa ter pelo menos 100 membros no canal para estar na lista!"
      );
    }

    validatorMember(ctx, botId, userId);

    const channelTitle: string = chatInfo.title;
    let hasInvite: string | undefined = chatInfo.invite_link;
    if (!hasInvite) {
      return;
    }
    const inviteLink: string = hasInvite;
    let hasChannelUsername: string | undefined = chatInfo.username;
    if (!hasChannelUsername) {
      return (hasChannelUsername = "n/a");
    }
    const channelUsername = hasChannelUsername;

    console.log(channelTitle);
    console.log(inviteLink);
    console.log(channelUsername);

    ctx.state.userData = {
      userId,
      userName,
      firstName,
      lastName,
      userLanguage,
      userChatId,
      userChatType,
      userDate,
    };

    ctx.state.channelData = {
      chatId,
      channelTitle,
      inviteLink,
      channelUsername,
      membersCount,
    };

    await prisma.user.upsert({
      where: {
        id: ctx.state.userData.userId,
      },
      update: {
        username: ctx.state.userData.userName,
      },
      create: {
        id: ctx.state.userData.userId,
        username: ctx.state.userData.userName,
      },
    });

    await prisma.channel.upsert({
      where: {
        id: ctx.state.channelData.chatId,
      },
      update: {
        title: channelTitle,
        username: channelUsername,
        link_invite: inviteLink,
        category_id: 1,
        member_count: membersCount,
      },
      create: {
        id: chatId,
        title: channelTitle,
        username: channelUsername,
        link_invite: inviteLink,
        category_id: 1,
        member_count: membersCount,
        user_id: chatId,
      },
    });

    await ctx.reply(
      `Bem-vindos(as) ${channelTitle}! Agora vocês estão participando da lista!`
    );

    await next();
    // Interações com botões
  });
};

export default colectUserInfos;
