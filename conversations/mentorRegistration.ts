import { projectCreationMenu } from '../menus/projectCreation.ts';
import { prismaClient } from '../prisma/mod.ts';
import { createConversation } from '../utils/createConversation.ts';

export const mentorRegistrationConversation = createConversation(async (
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
    { reply_markup: projectCreationMenu },
  );
}, [projectCreationMenu]);
