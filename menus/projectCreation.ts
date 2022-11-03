import { isMentor } from '../guards/isMentor.ts';
import { ConversationId } from '../types/Conversations.ts';
import { Menu, MenuId } from '../types/Menu.ts';

export const projectCreationMenu = new Menu(MenuId.PROJECT_CREATION).text(
  'Создать проект',
  async (context, next) => {
    let errorMessage: string | undefined;
    const { user } = context.session;

    if (!user) {
      errorMessage = '⛔️ Для создания проекта необходимо зарегистрироваться.';
    } else if (!isMentor(user)) {
      errorMessage = '⛔️ Только куратор может создать проект.';
    } else if (user.projectId !== null) {
      errorMessage = '⛔️ Ты уже создал проект.';
    }

    if (errorMessage) await context.reply(errorMessage);
    else await context.conversation.enter(ConversationId.PROJECT_CREATION);

    return next();
  },
);
