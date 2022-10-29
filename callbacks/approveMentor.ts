import { prismaClient } from '../prisma/mod.ts';
import { Callback } from '../types/Callbacks.ts';

export const approveMentorCallback: Callback = async (context, next) => {
  const { tgChatId } = await prismaClient.mentor.update({
    where: { id: BigInt(context.callbackQuery.data.split(':')[1]) },
    data: { isApproved: true },
  });

  await context.reply('✅ Куратор подтверждён.');

  await context.api.sendMessage(
    Number(tgChatId),
    '✅ Администрация одобрила твой проект.',
  );

  return next();
};
