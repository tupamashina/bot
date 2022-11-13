import { grammy } from '../deps.ts';
import { isStudent } from '../guards/isStudent.ts';
import { prismaClient } from '../prisma/mod.ts';
import { CallbackTrigger } from '../types/Callbacks.ts';
import { createMenu } from '../utils/createMenu.ts';

export const signingUpForProjectMenu = createMenu()
  .text('Записаться в проект', async (context, next) => {
    try {
      let errorMessage: string | undefined;
      const { user } = context.session;

      if (!user) {
        errorMessage = '⛔️ Для записи в проект необходимо зарегистрироваться.';
      } else if (!isStudent(user)) {
        errorMessage = '⛔️ Только участник может записаться в проект.';
      } else if (user.projectId !== null) {
        errorMessage = '⛔️ Ты уже записан в проект.';
      }

      if (errorMessage) return context.reply(errorMessage);

      const projects = await prismaClient.project.findMany({
        include: { mentor: true },
        where: { mentor: { isApproved: true } },
      });

      if (!projects.length) {
        return context.reply('Не найдено ни одного проекта😔.');
      }

      await Promise.all(
        projects.map(({ id, name, description, mentor }) =>
          context.reply(
            [
              `Название - ${name}`,
              `Описание - ${description}`,
              `Куратор - ${mentor!.name}`,
            ].join('\n'),
            {
              reply_markup: new grammy.InlineKeyboard().text(
                'Выбрать этот проект',
                `${CallbackTrigger.CHOOSE_PROJECT}?${new URLSearchParams({
                  id: id.toString(),
                })}`,
              ),
            },
          )
        ),
      );
    } finally {
      await next();
    }
  });
