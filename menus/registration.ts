import { ConversationId } from '../types/Conversations.ts';
import { Menu, MenuId } from '../types/Menu.ts';

type TextBtnHandler = Parameters<Menu['text']>[1];

const createTextBtnHandler = (
  conversationId: ConversationId,
): TextBtnHandler => {
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

export const registrationMenu = new Menu(MenuId.REGISTRATION)
  .text('Я участник', createTextBtnHandler(ConversationId.STUDENT_REGISTRATION))
  .text('Я куратор', createTextBtnHandler(ConversationId.MENTOR_REGISTRATION));
