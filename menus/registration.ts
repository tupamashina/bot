import { mentorRegistrationConversation } from '../conversations/mentorRegistration.ts';
import { studentRegistrationConversation } from '../conversations/studentRegistration.ts';
import { MenuTextBtnHandler } from '../types-new/Menu.ts';
import { createMenu } from '../utils/createMenu.ts';

const createTextBtnHandler = (conversationId: string): MenuTextBtnHandler => {
  return async (context, next) => {
    if (context.session.user) {
      await context.reply(
        'Упс! Ты уже зарегистрирован🤷‍♂️.',
      );
    } else {
      await context.conversation.enter(conversationId);
    }

    return next();
  };
};

export const registrationMenu = createMenu([
  studentRegistrationConversation,
  mentorRegistrationConversation,
])
  .text('Я участник', createTextBtnHandler(studentRegistrationConversation.id))
  .text('Я куратор', createTextBtnHandler(mentorRegistrationConversation.id));
