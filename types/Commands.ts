import { grammy } from '../deps.ts';
import { Context } from './Context.ts';
import { MaybeArray } from './utils.ts';

export type Command = grammy.MiddlewareFn<grammy.CommandContext<Context>> & {
  description: string;
};

export type Commands = Map<MaybeArray<string>, MaybeArray<Command>>;
