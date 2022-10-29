import { grammy } from '../deps.ts';
import { prismaClient } from '../prisma/mod.ts';
import { Callback, CallbackTrigger } from '../types/Callbacks.ts';

export const newStudentsCallback: Callback = async (context, next) => {
  const students = await prismaClient.student.findMany({
    where: { isApproved: false, projectId: { not: null } },
  });

  await Promise.all(
    students.map(({ id, name, group }) =>
      context.reply(
        [
          `Имя - ${name}`,
          `Группа - ${group}`,
        ].join('\n'),
        {
          reply_markup: new grammy.InlineKeyboard().text(
            'Подтвердить',
            `${CallbackTrigger.APPROVE_STUDENT}:${id}`,
          ),
        },
      )
    ),
  );

  return next();
};
