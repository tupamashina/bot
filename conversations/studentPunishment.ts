import { conversations } from 'https://deno.land/x/grammy_conversations@v1.0.3/conversation.ts';
import { students } from '../collections.ts';
import { mongo } from '../deps.ts';
import { Conversation } from '../types/bot.ts';

export const studentPunishmentConversation: Conversation = async (
  conversation,
  context,
) => {
  await context.reply('Введи id студента:');

  while (true) {
    let studentId: mongo.Bson.ObjectId;
    const { message: { text } } = await conversation.waitFor('message:text');

    try {
      studentId = new mongo.ObjectId(text);
    } catch {
      await context.reply('Id недействителен, попробуй ещё раз:');
      continue;
    }

    const student = await conversation.external(() =>
      students.findOne({ _id: studentId })
    );

    if (!student) {
      await context.reply('Студент не найден, попробуй ещё раз:');
      continue;
    }

    await conversation.external(() =>
      students.updateOne({ _id: studentId }, { $inc: { hearts: -1 } })
    );

    break;
  }

  await context.reply('Студент наказан😈');
};
