import { grammy, grammyConversation } from '../deps.ts';
import { StudentSchema } from './schemas.ts';

export interface Session {
  student?: StudentSchema;
}

export type Context =
  & grammy.Context
  & grammy.SessionFlavor<Session>
  & grammyConversation.ConversationFlavor;

export type Command = (
  context: grammy.CommandContext<Context>,
  next: grammy.NextFunction,
) => unknown | Promise<unknown>;

export type Query = (
  context: grammy.CallbackQueryContext<Context>,
  next: grammy.NextFunction,
) => unknown | Promise<unknown>;

export type Conversation = (
  conversation: grammyConversation.Conversation<Context>,
  context: Context,
) => unknown | Promise<unknown>;
