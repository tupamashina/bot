import { ConversationId } from '../types/Conversations.ts';
import { Menu, MenuId } from '../types/Menu.ts';

export const studentCabinetMenu = new Menu(MenuId.STUDENT_CABINET).text(
  'Ввести кодовое слово',
  async (context, next) => {
    await context.conversation.enter(ConversationId.CODE_WORD_INPUT);
    return next();
  },
);
