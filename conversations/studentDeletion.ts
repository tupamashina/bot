import { prismaClient } from '../prisma/mod.ts';
import { createConversation } from '../utils/createConversation.ts';

export const studentDeletionConversation = createConversation(
  async (conversation, context) => {
    const students = await conversation.external(
      () => prismaClient.student.findMany({ include: { project: true } }),
    );

    await context.reply(
      [
        '<b>Список студентов:</b>',
        ...students.map(({ id, name, group, project }) =>
          [
            `Id - ${id}`,
            `Имя - ${name}`,
            `Группа - ${group}`,
            `Проект - ${project?.name}`,
          ]
            .join(
              '\n',
            )
        ),
      ].join('\n\n'),
      { parse_mode: 'HTML' },
    );

    await context.reply(
      'Выбери студента из списка и введи его id, чтобы удалить:',
    );

    while (true) {
      const { message: { text } } = await conversation.waitFor('message:text');

      try {
        const { name } = await conversation.external(() =>
          prismaClient.student.delete({ where: { id: BigInt(text) } })
        );

        await context.reply(`Студент ${name} удалён.`);
        break;
      } catch {
        await context.reply('Что-то пошло не так, попробуй ещё раз:');
      }
    }
  },
);
