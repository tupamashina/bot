import { students } from '../collections.ts';
import { mongo } from '../deps.ts';
import { Conversation } from '../types/bot.ts';

const codeWords: string[] = [
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
  if (!context.session.student) {
    return await context.reply(
      'Зарегистрируйся, чтобы ввести кодовое слово.',
    );
  }

  await context.reply('Введи кодовое слово:');

  while (true) {
    const { message } = await conversation.waitFor('message:text');
    const word = message.text.trim();

    if (!codeWords.includes(word)) {
      await context.reply('Неверное кодовое слово, попробуй ещё раз:');
      continue;
    }

    if (context.session.student.usedWords.includes(word)) {
      await context.reply('Ты уже использовал это слово, попробуй ещё раз:');
      continue;
    }

    await conversation.external(() =>
      students.updateOne({
        _id: new mongo.ObjectId(context.session.student?._id),
      }, {
        $inc: { stars: 1 },
        $addToSet: { usedWords: { $each: [word] } },
      })
    );

    break;
  }

  await context.reply('Отлично, ты молодец, +1 ⭐');
};
