import { Command } from '../types/bot.ts';

export const personalCabinetCommand: Command = async (context, next) => {
  if (!context.session.student) {
    await context.reply('Зарегистрируйся, чтобы войти в личный кабинет.');
  } else {
    const { student } = context.session;

    await context.reply(
      [
        `${student.name}, ${student.group}\n`,
        `❤️ - ${student.hearts}`,
        `⭐ - ${student.stars}`,
      ].join('\n'),
    );
  }

  return next();
};

personalCabinetCommand.description = 'Личный кабинет';
