import { prismaClient } from '../prisma/mod.ts';
import { Callback } from '../types/Callbacks.ts';

export const chooseProjectCallback: Callback = async (context, next) => {
  const params = new URLSearchParams(context.callbackQuery.data.split('?')[1]);

  const { name, mentor } = await prismaClient.project.update({
    where: { id: BigInt(params.get('id')!) },
    select: { name: true, mentor: { select: { tgChatId: true } } },
    data: { students: { connect: { id: context.session.user!.id } } },
  });

  await context.reply(
    `Отлично, ты записался в проект ${name}, осталось только дождаться, пока ` +
      'куратор тебя примет. Я уведомлю тебя, когда это произойдёт.',
  );

  await context.api.sendMessage(
    Number(mentor!.tgChatId),
    '❗️К тебе в проект хочет записаться новый участник.',
  );

  return next();
};
