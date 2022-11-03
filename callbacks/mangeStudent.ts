import { prismaClient } from '../prisma/mod.ts';
import { Callback } from '../types/Callbacks.ts';
import { StudentManagementAction } from '../types/enums.ts';

export const manageStudentCallback: Callback = async (context, next) => {
  const params = new URLSearchParams(context.callbackQuery.data.split('?')[1]);

  let mentorReply: string;
  let studentMessage: string;
  let data: Parameters<typeof prismaClient.student.update>[0]['data'] = {};

  switch (Number(params.get('action'))) {
    case StudentManagementAction.INCREMENT_STARS: {
      mentorReply = '+1 ⭐';
      studentMessage = 'Молодец! У тебя +1 ⭐. Так держать!';

      data = { stars: { increment: 1 } };
      break;
    }

    case StudentManagementAction.DECREMENT_STARS: {
      mentorReply = '-1 ⭐';
      studentMessage = 'Упс! У тебя -1 ⭐. Старайся лучше!';

      data = { stars: { increment: -1 } };
      break;
    }

    case StudentManagementAction.INCREMENT_HEARTS: {
      mentorReply = '+1 ❤️';
      studentMessage = 'Молодец! У тебя +1 ❤️. Так держать!';

      data = { hearts: { increment: 1 } };
      break;
    }

    case StudentManagementAction.DECREMENT_HEARTS: {
      mentorReply = '-1 ❤️';
      studentMessage = 'Упс! У тебя -1 ❤️. Старайся лучше!';

      data = { hearts: { increment: -1 } };
      break;
    }

    default:
      return;
  }

  const { name, tgChatId } = await prismaClient.student.update({
    data,
    where: { id: BigInt(params.get('id')!) },
  });

  await context.reply(`${name}: ${mentorReply}`);
  await context.api.sendMessage(Number(tgChatId), studentMessage);

  return await next();
};
