import { students } from '../collections.ts';
import { Conversation } from '../types/bot.ts';
import { Role } from '../types/schemas.ts';
import { getSuccessfulRegistrationReply } from '../utils/getSuccessfulRegistrationReply.ts';

export const registrationConversation: Conversation = async (
  conversation,
  context,
) => {
  await context.reply(
    'Напиши свои ФИО и группу через запятую. Заходи в бота только с текущего аккаунта, чтобы не потерять достижения!',
  );

  while (true) {
    const { message } = await conversation.waitFor('message:text');
    const [name, group] = message.text.split(',').map((str) => str.trim());

    if (!name || !group) {
      await context.reply('Неверный формат, попробуй ещё раз.');
      continue;
    }

    await conversation.external(() =>
      students.insertOne({
        name,
        group,
        stars: 0,
        hearts: 3,
        usedWords: [],
        role: Role.SLAVE,
        telegramId: message.from.id,
      })
    );

    break;
  }

  await context.reply(
    getSuccessfulRegistrationReply(
      context.update.callback_query?.from.first_name,
    ),
  );
};
