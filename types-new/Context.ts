import { grammy, grammyConversation } from '../deps.ts';
import { Session } from './Session.ts';

export type Context =
  & grammy.Context
  & grammy.SessionFlavor<Session>
  & grammyConversation.ConversationFlavor;
