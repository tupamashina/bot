import { ConversationId } from '../types/enums.ts';
import { codeWordInputConversation } from './codeWordInput.ts';
import { registrationConversation } from './registration.ts';

export const conversations = {
  [ConversationId.REGISTRATION]: registrationConversation,
  [ConversationId.CODE_WORD_INPUT]: codeWordInputConversation,
};
