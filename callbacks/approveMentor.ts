import { prismaClient } from '../prisma/mod.ts';
import { Callback } from '../types/Callbacks.ts';

export const approveMentorCallback: Callback = async (context, next) => {
  const params = new URLSearchParams(context.callbackQuery.data.split('?')[1]);

  const { name, tgChatId } = await prismaClient.mentor.update({
    where: { id: BigInt(params.get('id')!) },
    data: { isApproved: true },
  });

  await context.reply(`✅ Куратор ${name} одобрен.`);

  await context.api.sendMessage(
    Number(tgChatId),
    'Поздравляю, ты прошёл проверку модерации!',
  );

  return next();
};
