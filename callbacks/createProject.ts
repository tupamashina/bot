import { isMentor } from '../guards/isMentor.ts';
import { Callback } from '../types/Callbacks.ts';
import { ConversationId } from '../types/Conversations.ts';

export const createProjectCallback: Callback = async (context, next) => {
  const { user } = context.session;

  if (!user) {
    await context.reply(
      '⛔️ Для создания проекта необходимо зарегистрироваться.',
    );
  } else if (!isMentor(user)) {
    await context.reply('⛔️ Создать проект может только куратор.');
  } else if (user.projectId) {
    await context.reply('⛔️ Ты уже создал проект.');
  } else {
    await context.conversation.enter(ConversationId.PROJECT_CREATION);
  }

  return next();
};
