import { students } from '../collections.ts';
import { mongo } from '../deps.ts';
import { Conversation } from '../types/bot.ts';

const codeWords = [
  'Потрошеный',
  'Лесник',
  'Сослепа',
  'Сволочь',
  'Сотовый',
  'Тыл',
  'Прогрохотать',
  'Житель',
  'Хамло',
  'Полосчатый',
];

export const codeWordInputConversation: Conversation = async (
  conversation,
  context,
) => {
  await context.reply('Введи кодовое слово:');

  while (true) {
    const { message: { text } } = await conversation.waitFor('message:text');

    if (!codeWords.includes(text)) {
      await context.reply('Неверное кодовое слово, попробуй ещё раз:');
      continue;
    }

    if (context.session.student!.usedWords.includes(text)) {
      await context.reply('Ты уже использовал это слово, попробуй ещё раз:');
      continue;
    }

    await conversation.external(() =>
      students.updateOne({
        _id: new mongo.ObjectId(context.session.student!._id),
      }, {
        $inc: { stars: 1 },
        $addToSet: { usedWords: { $each: [text] } },
      })
    );

    break;
  }

  await context.reply('Отлично, ты молодец, +1 ⭐');
};
