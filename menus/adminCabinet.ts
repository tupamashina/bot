import { mentorDeletionConversation } from '../conversations/mentorDeletion.ts';
import { studentDeletionConversation } from '../conversations/studentDeletion.ts';
import { grammy } from '../deps.ts';
import { prismaClient } from '../prisma/mod.ts';
import { CallbackTrigger } from '../types/Callbacks.ts';
import { createMenu } from '../utils/createMenu.ts';

export const adminCabinetMenu = createMenu([
  mentorDeletionConversation,
  studentDeletionConversation,
]).text(
  'Рейтинг проектов',
  async (context, next) => {
    const [projects, amountsOfProjectStars] = await Promise.all([
      await prismaClient.project.findMany({
        include: { mentor: true },
        where: { mentor: { isApproved: true } },
      }),
      await prismaClient.student.groupBy({
        by: ['projectId'],
        _sum: { stars: true },
        where: { projectId: { not: null } },
        orderBy: { _sum: { stars: 'desc' } },
      }),
    ]);

    if (!amountsOfProjectStars.length) {
      await context.reply('Никто ещё не создал ни одного проекта.');
    } else {
      await context.reply(
        amountsOfProjectStars.map(({ projectId, _sum: { stars } }) => {
          const { name, mentor } = projects.find(({ id }) => id === projectId)!;

          return [
            `Название - ${name}`,
            `Куратор - ${mentor!.name}`,
            `Общее кол-во ⭐ - ${stars}`,
          ].join('\n');
        }).join('\n\n'),
      );
    }

    return next();
  },
).text('Новые кураторы', async (context, next) => {
  const mentors = await prismaClient.mentor.findMany({
    include: { project: true },
    where: { projectId: { not: null }, isApproved: false },
  });

  if (!mentors.length) {
    await context.reply('Новых кураторов пока нет🤷‍♂️.');
  } else {
    await Promise.all(
      mentors.map(({ id, name, project }) =>
        context.reply(
          [
            `Имя - ${name}`,
            `Название проекта - ${project!.name}`,
            `Описание проекта - ${project!.description}`,
          ].join('\n'),
          {
            reply_markup: new grammy.InlineKeyboard().text(
              'Одобрить куратора',
              `${CallbackTrigger.APPROVE_MENTOR}?${new URLSearchParams({
                id: id.toString(),
              })}`,
            ),
          },
        )
      ),
    );
  }

  return next();
}).row().text(
  'Удалить куратора',
  async (context, next) => {
    await context.conversation.enter(mentorDeletionConversation.id);
    return next();
  },
).text(
  'Удалить студента',
  async (context, next) => {
    await context.conversation.enter(studentDeletionConversation.id);
    return next();
  },
);
