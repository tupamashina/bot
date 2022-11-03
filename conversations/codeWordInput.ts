import { prisma } from '../deps.ts';
import { prismaClient } from '../prisma/mod.ts';
import { Conversation } from '../types/Conversations.ts';
import { useCodeWord } from '../utils/codeWords.ts';

export const codeWordInputConversation: Conversation = async (
  conversation,
  context,
) => {
  await context.reply('Введи кодовое слово:');

  while (true) {
    const { message: { text } } = await conversation.waitFor('message:text');

    if (
      useCodeWord((context.session.user as prisma.Student).projectId!, text)
    ) break;

    await context.reply('Неверное кодовое слово, попробуй ещё раз:');
  }

  await conversation.external(() =>
    prismaClient.student.update({
      where: { id: context.session.user!.id },
      data: { stars: { increment: 1 } },
    })
  );

  await context.reply('Молодец! У тебя +1 ⭐. Так держать!');
};
