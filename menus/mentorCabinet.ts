import { grammy, prisma } from '../deps.ts';
import { prismaClient } from '../prisma/mod.ts';
import { CallbackTrigger } from '../types/Callbacks.ts';
import { StudentManagementAction } from '../types/enums.ts';
import { generateCodeWord, getCodeWordList } from '../utils/codeWords.ts';
import { createMenu } from '../utils/createMenu.ts';

const getCallbackTrigger = (id: bigint, action: StudentManagementAction) => {
  const params = new URLSearchParams({
    id: id.toString(),
    action: action.toString(),
  });

  return `${CallbackTrigger.MANAGE_STUDENT}?${params}`;
};

const createKeyboard = (id: bigint) =>
  new grammy.InlineKeyboard()
    .text(
      '+1 ⭐',
      getCallbackTrigger(id, StudentManagementAction.INCREMENT_STARS),
    )
    .text(
      '-1 ⭐',
      getCallbackTrigger(id, StudentManagementAction.DECREMENT_STARS),
    ).row()
    .text(
      '-1 ❤️',
      getCallbackTrigger(id, StudentManagementAction.DECREMENT_HEARTS),
    )
    .text(
      '+1 ❤️',
      getCallbackTrigger(id, StudentManagementAction.INCREMENT_HEARTS),
    );

export const mentorCabinetMenu = createMenu().text(
  'Новые участники',
  async (context, next) => {
    const students = await prismaClient.student.findMany({
      include: { project: true },
      where: {
        projectId: (context.session.user as prisma.Mentor).projectId,
        isApproved: false,
      },
    });

    if (!students.length) {
      await context.reply('Новых участников пока нет🤷‍♂️.');
    } else {
      await Promise.all(
        students.map(({ id, name, group }) =>
          context.reply(
            [
              `Имя - ${name}`,
              `Группа - ${group}`,
            ].join('\n'),
            {
              reply_markup: new grammy.InlineKeyboard().text(
                'Принять участника',
                `${CallbackTrigger.APPROVE_STUDENT}?${new URLSearchParams({
                  id: id.toString(),
                })}`,
              ),
            },
          )
        ),
      );
    }

    return next();
  },
).text(
  'Список участников проекта',
  async (context, next) => {
    const students = await prismaClient.student.findMany({
      where: {
        isApproved: true,
        projectId: (context.session.user as prisma.Mentor).projectId!,
      },
    });

    if (!students.length) {
      await context.reply('К тебе в проект ещё никто не записался😔.');
    } else {
      await Promise.all(
        students.map(
          ({ id, name, group, stars, hearts }) =>
            context.reply(
              [`${name}, ${group}\n`, `⭐: ${stars}`, `❤️: ${hearts}`].join(
                '\n',
              ),
              { reply_markup: createKeyboard(id) },
            ),
          [],
        ),
      );
    }

    return next();
  },
).row().text('Сгенерировать кодовое слово', async (context, next) => {
  try {
    const codeWord = await generateCodeWord(
      (context.session.user as prisma.Mentor).projectId!,
    );

    await context.reply(`✅ Сгенерировано новое кодовое слово: ${codeWord}.`);
  } catch {
    await context.reply(
      '❗️ Во время генерации произошла ошибка. Попробуй ещё раз.',
    );
  }

  return next();
}).text('Сгенерированные кодовые слова', async (context, next) => {
  const codeWords = getCodeWordList(
    (context.session.user as prisma.Mentor).projectId!,
  );

  if (!codeWords.length) {
    await context.reply('Ты ещё не сгенерировал ни одного кодового слова.');
  } else {
    await context.reply(
      `Сгенерированные кодовые слова: ${codeWords.join(', ')}`,
    );
  }

  return next();
});
