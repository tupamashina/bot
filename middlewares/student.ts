import { students } from '../collections.ts';
import { grammy } from '../deps.ts';
import { Context } from '../types/bot.ts';

export const studentMiddleware: grammy.MiddlewareFn<Context> = async (
  context,
  next,
) => {
  context.session.student = await students.findOne({
    telegramId: context.message?.from?.id,
  });

  return next();
};
