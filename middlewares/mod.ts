import { conversationMiddlewares } from './conversationMiddlewares.ts';
import { sessionMiddleware } from './sessionMiddleware.ts';

export const middlewares = [sessionMiddleware, ...conversationMiddlewares];
