import { prismaClient } from '../prisma/mod.ts';
import { Callback } from '../types/Callbacks.ts';

export const approveStudentCallback: Callback = async (context, next) => {
  const params = new URLSearchParams(context.callbackQuery.data.split('?')[1]);

  const { name, tgChatId } = await prismaClient.student.update({
    where: { id: BigInt(params.get('id')!) },
    data: { isApproved: true },
  });

  await context.reply(`✅ Участник ${name} принят.`);

  await context.api.sendMessage(
    Number(tgChatId),
    'Поздравляю, ты принят в проект!',
  );

  return next();
};
