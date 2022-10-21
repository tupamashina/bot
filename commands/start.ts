import { grammy } from '../deps.ts';
import { Command } from '../types/bot.ts';
import { QueryTrigger } from '../types/enums.ts';
import { getNewStudentStartReply } from '../utils/getNewStudentStartReply.ts';

export const startCommand: Command = async (context, next) => {
  if (!context.session.student) {
    await context.reply(
      getNewStudentStartReply(context.message?.from.first_name),
      {
        reply_markup: new grammy.InlineKeyboard().text(
          'Отлично, что нужно делать?',
          QueryTrigger.WHAT_TO_DO,
        ),
      },
    );
  }

  return next();
};

startCommand.description = 'Запустить бота и зарегистрироваться';
