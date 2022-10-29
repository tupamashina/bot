import { grammy } from '../deps.ts';
import { prismaClient } from '../prisma/mod.ts';
import { CallbackTrigger } from '../types/Callbacks.ts';
import { Conversation } from '../types/Conversations.ts';

export const studentRegistrationConversation: Conversation = async (
  conversation,
  context,
) => {
  await context.reply('Введи своё ФИО:');

  const { message: { text: name } } = await conversation.waitFor(
    'message:text',
  );

  await context.reply('Теперь свою группу:');

  const { message: { text: group, from }, chat } = await conversation.waitFor(
    'message:text',
  );

  await conversation.external(() =>
    prismaClient.student.create({
      data: {
        name,
        group,
        tgChatId: chat.id,
        tgUserId: from.id,
        tgUsername: from.username,
      },
    })
  );

  await context.reply(
    'Отлично, ты зарегистрирован. Теперь давай запишемся в проект.',
    {
      reply_markup: new grammy.InlineKeyboard().text(
        'Записаться в проект',
        CallbackTrigger.SIGN_UP_FOR_PROJECT,
      ),
    },
  );
};
