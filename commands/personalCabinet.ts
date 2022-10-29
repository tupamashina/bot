import { grammy, prisma } from '../deps.ts';
import { isAdmin } from '../guards/isAdmin.ts';
import { isMentor } from '../guards/isMentor.ts';
import { isStudent } from '../guards/isStudent.ts';
import { CallbackTrigger } from '../types/Callbacks.ts';
import { Command } from '../types/Commands.ts';

const adminKeyboard = new grammy.InlineKeyboard().text(
  'Новые кураторы',
  CallbackTrigger.NEW_MENTORS,
);

const mentorWithoutProjectKeyboard = new grammy.InlineKeyboard().text(
  'Создать проект',
  CallbackTrigger.CREATE_PROJECT,
);

const approvedMentorKeyboard = new grammy.InlineKeyboard().text(
  'Новые студенты',
  CallbackTrigger.NEW_STUDENTS,
);

const studentWithoutProjectKeyboard = new grammy.InlineKeyboard().text(
  'Записаться в проект',
  CallbackTrigger.SIGN_UP_FOR_PROJECT,
);

export const personalCabinetCommand: Command = async (context, next) => {
  const { user } = context.session;

  try {
    if (!user) {
      return context.reply(
        '⛔️ Для входа в личный кабинет необходимо зарегистрироваться.',
      );
    }

    if (isAdmin(user)) {
      return context.reply('Пока не придумал, что тут должно быть)', {
        reply_markup: adminKeyboard,
      });
    }

    if (isMentor(user)) {
      if (!(user as prisma.Mentor).projectId) {
        return context.reply(
          '⛔️ Для входа в личный кабинет необходимо создать проект.',
          { reply_markup: mentorWithoutProjectKeyboard },
        );
      }

      if ((user as prisma.Mentor).isApproved) {
        return context.reply('Пока не придумал, что тут должно быть)', {
          reply_markup: approvedMentorKeyboard,
        });
      }

      return context.reply(
        '⛔️ Для входа в личный кабинет необходимо дождаться результатов проверки администрации.',
      );
    }

    if (isStudent(user)) {
      if (!(user as prisma.Student).projectId) {
        return context.reply(
          '⛔️ Для входа в личный кабинет необходимо записаться в проект.',
          { reply_markup: studentWithoutProjectKeyboard },
        );
      }

      if ((user as prisma.Student).isApproved) {
        return context.reply(
          [
            `${(user as prisma.Student).name}, ${
              (user as prisma.Student).group
            }\n`,
            `Звёзды - ${(user as prisma.Student).stars}`,
            `Сердца - ${(user as prisma.Student).hearts}`,
          ].join('\n'),
        );
      }

      return context.reply(
        '⛔️ Для входа в личный кабинет необходимо дождаться подтверждения заявки куратором проекта.',
      );
    }
  } finally {
    await next();
  }
};

personalCabinetCommand.description = 'Личный кабинет';
