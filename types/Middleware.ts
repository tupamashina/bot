import { grammy } from '../deps.ts';
import { Context } from './Context.ts';

export type Middleware = grammy.MiddlewareFn<Context>;
