import { grammy, grammyConversation } from './deps.ts';

export type Context = grammy.Context & grammyConversation.ConversationFlavor;

export type ConversationBuilder = (
  conversation: grammyConversation.Conversation<Context>,
  context: Context,
) => unknown | Promise<unknown>;
