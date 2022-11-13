import { signingUpForProjectMenu } from '../menus/signingUpForProject.ts';
import { prismaClient } from '../prisma/mod.ts';
import { createConversation } from '../utils/createConversation.ts';

export const studentRegistrationConversation = createConversation(async (
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
    { reply_markup: signingUpForProjectMenu },
  );
}, [signingUpForProjectMenu]);
