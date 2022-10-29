import { grammy } from '../deps.ts';
import { isMentor } from '../guards/isMentor.ts';
import { isStudent } from '../guards/isStudent.ts';
import { CallbackTrigger } from '../types/Callbacks.ts';
import { Command } from '../types/Commands.ts';

const unregisteredUserKeyboard = new grammy.InlineKeyboard().text(
  'Я участник',
  CallbackTrigger.REGISTER_STUDENT,
).text(
  'Я куратор',
  CallbackTrigger.REGISTER_MENTOR,
);

const mentorWithoutProjectKeyboard = new grammy.InlineKeyboard().text(
  'Создать проект',
  CallbackTrigger.CREATE_PROJECT,
);

const studentWithoutProjectKeyboard = new grammy.InlineKeyboard().text(
  'Записаться в проект',
  CallbackTrigger.SIGN_UP_FOR_PROJECT,
);

export const startCommand: Command = async (context, next) => {
  const { user } = context.session;

  const isRegistered = !!user;
  const isMentorWithoutProject = isMentor(user) && !user.projectId;
  const isStudentWithoutProject = isStudent(user) && !user.projectId;

  await context.replyWithPhoto(
    'https://sun9-78.userapi.com/impg/z2XNPYSCjJb9vkZJJsAeNmTZDoB7FXt6nF4AbQ/BLcCWD' +
      '_GgyY.jpg?size=640x360&quality=96&sign=bece516fac381bf6a9f5459b66ca7e27&type=album',
    {
      caption: [
        `Привет, ${context.from?.first_name || 'незнакомец'}!`,
        'Это бот проекта "Автоматизированный контент".',
        !isRegistered
          ? 'Видимо, ты участник проекта или его куратор. Для начала необходимо зарегистрироваться. Итак, кто же ты?'
          : isMentorWithoutProject
          ? 'Ты уже зарегистрирован, но ещё не создал проект.'
          : isStudentWithoutProject
          ? 'Ты уже зарегистрирован, но ещё не записался в проект.'
          : 'Ты уже зарегистрирован, поэтому выбирай команду в меню и за работу. Удачи!',
      ].join('\n\n'),
      reply_markup: !isRegistered
        ? unregisteredUserKeyboard
        : isMentorWithoutProject
        ? mentorWithoutProjectKeyboard
        : isStudentWithoutProject
        ? studentWithoutProjectKeyboard
        : undefined,
    },
  );

  return next();
};

startCommand.description = 'Запустить бота и зарегистрироваться';
