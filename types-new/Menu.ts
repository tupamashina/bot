import { grammyMenu } from '../deps.ts';
import { Context } from './Context.ts';
import { Conversation } from './Conversation.ts';

// @ts-expect-error: redefining the visibility of the menu id
export interface Menu extends grammyMenu.Menu<Context> {
  readonly id: string;
  readonly dependencies: ReadonlyArray<Menu | Conversation>;
}

export type MenuTextBtnHandler = Parameters<Menu['text']>[1];
