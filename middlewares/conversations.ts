import { conversations } from '../conversations/index.ts';
import { grammyConversation } from '../deps.ts';

export const conversationsMiddlewares = Object.entries(conversations).map((
  [id, conversation],
) => grammyConversation.createConversation(conversation, id));
