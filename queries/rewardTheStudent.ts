import { students } from '../collections.ts';
import { mongo } from '../deps.ts';
import { Query } from '../types/bot.ts';

export const rewardTheStudentQuery: Query = async (context, next) => {
  const _id = new mongo.ObjectId(context.callbackQuery.data.split(':')[1]);

  await students.updateOne({ _id }, {
    $inc: { stars: 1 },
  });

  await context.reply('Студент награждён🎖');
  const student = await students.findOne({ _id });

  if (student) {
    await context.api.sendMessage(
      student.chatId,
      'Молодец! У тебя +1 ⭐, так держать.',
    );
  }

  return next();
};
