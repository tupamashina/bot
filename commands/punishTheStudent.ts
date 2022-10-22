import { Command } from '../types/bot.ts';
import { ConversationId } from '../types/enums.ts';
import { Role } from '../types/schemas.ts';

export const punishTheStudentCommand: Command = async (context, next) => {
  if (context.session.student?.role !== Role.MASTER) {
    await context.reply(
      'У тебя недостаточно прав для выполнения этой команды(',
    );
  } else await context.conversation.enter(ConversationId.STUDENT_PUNISHMENT);

  return next;
};

punishTheStudentCommand.description = 'Наказать студента';
