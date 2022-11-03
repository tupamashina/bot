import { grammyConversation } from '../deps.ts';
import { Context } from './Context.ts';
import { MaybePromise } from './utils.ts';

export enum ConversationId {
  MENTOR_REGISTRATION = 'MENTOR_REGISTRATION',
  STUDENT_REGISTRATION = 'STUDENT_REGISTRATION',
  PROJECT_CREATION = 'PROJECT_CREATION',
  CODE_WORD_INPUT = 'CODE_WORD_INPUT',
}

export type Conversation = (
  conversation: grammyConversation.Conversation<Context>,
  context: Context,
) => MaybePromise<unknown>;

export type Conversations = Map<ConversationId, Conversation>;
