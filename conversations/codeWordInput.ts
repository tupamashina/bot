import { prisma } from '../deps.ts';
import { prismaClient } from '../prisma/mod.ts';
import { useCodeWord } from '../utils/codeWords.ts';
import { createConversation } from '../utils/createConversation.ts';

export const codeWordInputConversation = createConversation(
  async (conversation, context) => {
    await context.reply('Введи кодовое слово:');
    const user = context.session.user as prisma.Student;

    while (true) {
      const { message: { text } } = await conversation.waitFor('message:text');

      if (useCodeWord(user.projectId!, text)) break;
      await context.reply('Неверное кодовое слово, попробуй ещё раз:');
    }

    await conversation.external(() =>
      prismaClient.student.update({
        where: { id: context.session.user!.id },
        data: { stars: { increment: 1 } },
      })
    );

    await context.reply('Молодец! У тебя +1 ⭐. Так держать!');
  },
);
