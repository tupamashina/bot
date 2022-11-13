import { prismaClient } from '../prisma/mod.ts';
import { createConversation } from '../utils/createConversation.ts';

export const mentorDeletionConversation = createConversation(
  async (conversation, context) => {
    const mentors = await conversation.external(
      () => prismaClient.mentor.findMany({ include: { project: true } }),
    );

    await context.reply(
      [
        '<b>Список кураторов:</b>',
        ...mentors.map(({ id, name, project }) =>
          [`Id - ${id}`, `Имя - ${name}`, `Название проекта - ${project?.name}`]
            .join(
              '\n',
            )
        ),
      ].join('\n\n'),
      { parse_mode: 'HTML' },
    );

    await context.reply(
      'Выбери куратора из списка и введи его id, чтобы удалить:',
    );

    while (true) {
      const { message: { text } } = await conversation.waitFor('message:text');

      try {
        const { name } = await conversation.external(() =>
          prismaClient.mentor.delete({ where: { id: BigInt(text) } })
        );

        await context.reply(`Куратор ${name} удалён.`);
        break;
      } catch {
        await context.reply('Что-то пошло не так, попробуй ещё раз:');
      }
    }
  },
);
