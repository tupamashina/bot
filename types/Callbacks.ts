import { grammy } from '../deps.ts';
import { Context } from './Context.ts';
import { MaybeArray } from './utils.ts';

export enum CallbackTrigger {
  REGISTER_MENTOR = 'REGISTER_MENTOR',
  REGISTER_STUDENT = 'REGISTER_STUDENT',
  CREATE_PROJECT = 'CREATE_PROJECT',
  SIGN_UP_FOR_PROJECT = 'SIGN_UP_FOR_PROJECT',
  CHOOSE_PROJECT = 'CHOOSE_PROJECT',
  NEW_MENTORS = 'NEW_MENTORS',
  APPROVE_MENTOR = 'APPROVE_MENTOR',
  NEW_STUDENTS = 'NEW_STUDENTS',
  APPROVE_STUDENT = 'APPROVE_STUDENT',
}

export type Callback = grammy.MiddlewareFn<
  grammy.CallbackQueryContext<Context>
>;

export type Callbacks = Map<
  MaybeArray<CallbackTrigger | RegExp>,
  MaybeArray<Callback>
>;
