import { grammy } from '../deps.ts';
import { prismaClient } from '../prisma/mod.ts';
import { CallbackTrigger } from '../types/Callbacks.ts';
import { Conversation } from '../types/Conversations.ts';

export const mentorRegistrationConversation: Conversation = async (
  conversation,
  context,
) => {
  await context.reply('Введи своё ФИО:');

  const { message: { text, from }, chat } = await conversation.waitFor(
    'message:text',
  );

  await conversation.external(() =>
    prismaClient.mentor.create({
      data: {
        name: text,
        tgChatId: chat.id,
        tgUserId: from.id,
        tgUsername: from.username,
      },
    })
  );

  await context.reply(
    'Отлично, ты зарегистрирован. Теперь давай создадим проект.',
    {
      reply_markup: new grammy.InlineKeyboard().text(
        'Создать проект',
        CallbackTrigger.CREATE_PROJECT,
      ),
    },
  );
};
