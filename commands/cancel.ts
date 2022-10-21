import { Command } from '../types/bot.ts';

export const cancelCommand: Command = async (context, next) => {
  await context.conversation.exit();
  return next();
};

cancelCommand.description = 'Прекратить выполнение текущей команды';
