import { Callback } from '../types/Callbacks.ts';
import { ConversationId } from '../types/Conversations.ts';

export const registerStudentCallback: Callback = async (context, next) => {
  if (context.session.user) {
    await context.reply('Упс! Ты уже зарегистрирован🤷‍♂️.');
  } else {
    await context.conversation.enter(ConversationId.STUDENT_REGISTRATION, {
      overwrite: true,
    });
  }

  return next();
};
