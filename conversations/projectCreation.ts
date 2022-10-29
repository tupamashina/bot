import { prismaClient } from '../prisma/mod.ts';
import { Conversation } from '../types/Conversations.ts';

export const projectCreationConversation: Conversation = async (
  conversation,
  context,
) => {
  await context.reply('Как называется твой проект?');

  const { message: { text: name } } = await conversation.waitFor(
    'message:text',
  );

  await context.reply(
    'Расскажи мне о нём поподробнее (но не больше 100 символов❗️)',
  );

  while (true) {
    const { message: { text: description } } = await conversation.waitFor(
      'message:text',
    );

    if (description.length > 100) {
      await context.reply('В сообщение больше 100 символов, попробуй ещё раз:');
      continue;
    }

    await conversation.external(() =>
      prismaClient.project.create({
        data: {
          name,
          description,
          mentor: { connect: { id: context.session.user?.id } },
        },
      })
    );

    await context.reply(
      'Отлично, проект создан, осталось только дождаться проверки от администрации.' +
        ' Я уведомлю тебя о её результатах, а пока можешь расслабиться.',
    );

    const admins = await conversation.external(prismaClient.admin.findMany);

    await Promise.all(
      admins.map(({ tgChatId }) =>
        context.api.sendMessage(
          Number(tgChatId),
          '❗️Новый куратор ожидает подтверждения.',
        )
      ),
    );

    break;
  }
};
