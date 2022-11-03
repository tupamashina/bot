import { prisma } from '../deps.ts';
import { isAdmin } from '../guards/isAdmin.ts';
import { isMentor } from '../guards/isMentor.ts';
import { isStudent } from '../guards/isStudent.ts';
import { adminCabinetMenu } from '../menus/adminCabinet.ts';
import { mentorCabinetMenu } from '../menus/mentorCabinet.ts';
import { projectCreationMenu } from '../menus/projectCreation.ts';
import { signingUpForProjectMenu } from '../menus/signingUpForProject.ts';
import { studentCabinetMenu } from '../menus/studentCabinet.ts';
import { Command } from '../types/Commands.ts';

export const personalCabinetCommand: Command = async (context, next) => {
  try {
    const { session } = context;

    if (!session.user) {
      return await context.reply(
        '⛔️ Для входа в личный кабинет необходимо зарегистрироваться.',
      );
    }

    if (isAdmin(session.user)) {
      // TODO
      return await context.reply('Кабинет админа', {
        reply_markup: adminCabinetMenu,
      });
    }

    if (isMentor(session.user)) {
      const user = session.user as prisma.Mentor;

      if (!user.projectId) {
        await context.reply('Сначала создай проект.', {
          reply_markup: projectCreationMenu,
        });
      } else if (!user.isApproved) {
        await context.reply('Сначала дождись проверки от администрации.');
      } else {
        await context.reply('Кабинет куратора', {
          reply_markup: mentorCabinetMenu,
        });
      }

      return;
    }

    if (isStudent(session.user)) {
      const user = session.user as prisma.Student;

      if (!user.projectId) {
        await context.reply('Сначала запишись в проект.', {
          reply_markup: signingUpForProjectMenu,
        });
      } else if (!user.isApproved) {
        await context.reply(
          'Сначала дождись, пока куратор примет тебя в проект.',
        );
      } else {
        await context.reply(
          [
            `${user.name}, ${user.group}\n`,
            `⭐: ${user.stars}`,
            `❤️: ${user.hearts}`,
          ].join('\n'),
          { reply_markup: studentCabinetMenu },
        );
      }

      return;
    }
  } finally {
    await next();
  }
};

personalCabinetCommand.description = 'Личный кабинет';
