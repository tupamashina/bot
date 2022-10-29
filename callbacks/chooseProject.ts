import { prismaClient } from '../prisma/mod.ts';
import { Callback } from '../types/Callbacks.ts';

export const chooseProjectCallback: Callback = async (context, next) => {
  const { project } = await prismaClient.student.update({
    where: { id: context.session.user?.id },
    select: { project: { select: { mentor: true } } },
    data: {
      project: {
        connect: { id: BigInt(context.callbackQuery.data.split(':')[1]) },
      },
    },
  });

  await context.reply(
    'Отлично, ты записан в проект, осталось только дождаться подтверждения от куратора.' +
      ' Пока можешь расслабиться, я уведомлю тебя, как только это произойдёт.',
  );

  await context.api.sendMessage(
    Number(project?.mentor?.tgChatId),
    '❗️Новый студент хочет записаться к тебе в проект.',
  );

  return next();
};
