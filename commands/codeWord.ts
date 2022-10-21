import { Command } from '../types/bot.ts';
import { ConversationId } from '../types/enums.ts';

export const codeWordCommand: Command = async (context, next) => {
  await context.conversation.enter(ConversationId.CODE_WORD_INPUT);
  return next();
};

codeWordCommand.description = 'Ввести кодовое слово';
