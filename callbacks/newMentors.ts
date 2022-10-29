import { grammy } from '../deps.ts';
import { prismaClient } from '../prisma/mod.ts';
import { Callback, CallbackTrigger } from '../types/Callbacks.ts';

export const newMentorsCallback: Callback = async (context, next) => {
  const mentors = await prismaClient.mentor.findMany({
    where: { isApproved: false, projectId: { not: null } },
    include: { project: true },
  });

  await Promise.all(
    mentors.map(({ id, name, project }) =>
      context.reply(
        [
          `Куратор - ${name}`,
          `Название проекта - ${project?.name}`,
          `Описание проекта - ${project?.description}`,
        ].join('\n'),
        {
          reply_markup: new grammy.InlineKeyboard().text(
            'Подтвердить',
            `${CallbackTrigger.APPROVE_MENTOR}:${id}`,
          ),
        },
      )
    ),
  );

  return next();
};
