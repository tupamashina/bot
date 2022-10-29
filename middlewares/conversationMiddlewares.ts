import { conversations } from '../conversations/mod.ts';
import { grammyConversation } from '../deps.ts';

export const conversationMiddlewares = Array.from(conversations.entries()).map((
  [id, conversation],
) => grammyConversation.createConversation(conversation, id));
