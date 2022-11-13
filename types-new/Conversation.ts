import { grammyConversation } from '../deps.ts';
import { Context } from './Context.ts';
import { Menu } from './Menu.ts';

type Builder = (
  conversation: grammyConversation.Conversation<Context>,
  context: Context,
) => unknown | Promise<unknown>;

export interface Conversation {
  readonly id: string;
  readonly builder: Builder;
  readonly dependencies: ReadonlyArray<Menu | Conversation>;
}
