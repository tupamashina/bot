import { projectCreationConversation } from '../conversations/projectCreation.ts';
import { isMentor } from '../guards/isMentor.ts';
import { createMenu } from '../utils/createMenu.ts';

export const projectCreationMenu = createMenu([projectCreationConversation])
  .text(
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
      else await context.conversation.enter(projectCreationConversation.id);

      return next();
    },
  );
