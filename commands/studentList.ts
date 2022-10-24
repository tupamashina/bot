import { students } from '../collections.ts';
import { grammy } from '../deps.ts';
import { Command } from '../types/bot.ts';
import { Role } from '../types/schemas.ts';

export const studentListCommand: Command = async (context, next) => {
  if (context.session.student?.role !== Role.MASTER) {
    await context.reply(
      'У тебя недостаточно прав для выполнения этой команды(',
    );
  } else {
    const allStudents = await students.find().toArray();

    await Promise.allSettled(
      allStudents.map(({ _id, name, group, stars, hearts }) =>
        context.reply(
          [
            `Имя - ${name}`,
            `Группа - ${group}`,
            `Звёзды - ${stars}`,
            `Жизни - ${hearts}`,
          ].join('\n'),
          {
            reply_markup: new grammy.InlineKeyboard().text(
              '+1 ⭐',
              `plus_star:${_id}`,
            ).text('-1 ⭐', `minus_star:${_id}`).row().text(
              '-1 ❤️',
              `minus_heart:${_id}`,
            ).text(
              '+1 ❤️',
              `plus_heart:${_id}`,
            ),
          },
        )
      ),
    );
  }

  return next();
};

studentListCommand.description = 'Вывести список студентов';
