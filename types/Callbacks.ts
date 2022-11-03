import { grammy } from '../deps.ts';
import { Context } from './Context.ts';
import { MaybeArray } from './utils.ts';

export enum CallbackTrigger {
  MANAGE_STUDENT = 'MANAGE_STUDENT',
  CHOOSE_PROJECT = 'CHOOSE_PROJECT',
  APPROVE_MENTOR = 'APPROVE_MENTOR',
  APPROVE_STUDENT = 'APPROVE_STUDENT',
}

export type Callback = grammy.MiddlewareFn<
  grammy.CallbackQueryContext<Context>
>;

export type Callbacks = Map<
  MaybeArray<CallbackTrigger | RegExp>,
  MaybeArray<Callback>
>;
