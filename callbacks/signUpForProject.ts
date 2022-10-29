import { grammy } from '../deps.ts';
import { isStudent } from '../guards/isStudent.ts';
import { prismaClient } from '../prisma/mod.ts';
import { Callback, CallbackTrigger } from '../types/Callbacks.ts';

export const signUpForProjectCallback: Callback = async (context, next) => {
  const { user } = context.session;

  if (!user) {
    await context.reply(
      '⛔️ Для записи в проект необходимо зарегистрироваться.',
    );
  } else if (!isStudent(user)) {
    await context.reply('⛔️ Записаться в проект может только участник.');
  } else if (user.projectId) {
    await context.reply('⛔️ Ты уже записался в проект.');
  } else {
    await context.reply('Выбирай один из предложенных проектов:');

    const projects = await prismaClient.project.findMany({
      include: { mentor: true },
      where: { mentor: { isApproved: true } },
    });

    await Promise.all(
      projects.map(({ name, description, mentor, id }) =>
        context.reply(
          [
            `Название - ${name}`,
            `Описание - ${description}`,
            `Куратор - ${mentor?.name}`,
          ].join('\n'),
          {
            reply_markup: new grammy.InlineKeyboard().text(
              '✅ Выбрать этот проект',
              `${CallbackTrigger.CHOOSE_PROJECT}:${id}`,
            ),
          },
        )
      ),
    );
  }

  return next();
};
