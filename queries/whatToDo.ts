import { Query } from '../types/bot.ts';
import { ConversationId } from '../types/enums.ts';

export const whatToDoQuery: Query = async (context, next) => {
  await context.conversation.enter(ConversationId.REGISTRATION);
  return next();
};
