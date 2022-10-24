import { students } from '../collections.ts';
import { mongo } from '../deps.ts';
import { Query } from '../types/bot.ts';

export const minusStarQuery: Query = async (context, next) => {
  const _id = new mongo.ObjectId(context.callbackQuery.data.split(':')[1]);

  await students.updateOne({ _id }, {
    $inc: { stars: -1 },
  });

  await context.reply('У студента -1 ⭐');
  const student = await students.findOne({ _id });

  if (student) {
    await context.api.sendMessage(
      student.chatId,
      'Упс! У тебя -1 ⭐, старайся лучше.'
    );
  }

  return next();
};
