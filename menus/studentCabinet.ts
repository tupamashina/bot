import { codeWordInputConversation } from '../conversations/codeWordInput.ts';
import { createMenu } from '../utils/createMenu.ts';

export const studentCabinetMenu = createMenu([codeWordInputConversation]).text(
  'Ввести кодовое слово',
  async (context, next) => {
    await context.conversation.enter(codeWordInputConversation.id);
    return next();
  },
);
