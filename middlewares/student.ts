import { students } from '../collections.ts';
import { grammy, mongo } from '../deps.ts';
import { Context } from '../types/bot.ts';

export const studentMiddleware: grammy.MiddlewareFn<Context> = async (
  context,
  next,
) => {
   const student = await students.findOne({
    telegramId: context.from?.id,
  });

  if (student) {
    const chatId = context.chat?.id;

    if (typeof chatId === 'number' && student.chatId !== chatId) {
      await students.updateOne({ _id: new mongo.ObjectId(student._id) }, {
        chatId,
      });

      student.chatId = chatId;
    }

    context.session.student = student;
  }

  return next();
};
