import { ConversationId } from '../types/enums.ts';
import { codeWordInputConversation } from './codeWordInput.ts';
import { registrationConversation } from './registration.ts';
import { studentPunishmentConversation } from './studentPunishment.ts';

export const conversations = {
  [ConversationId.REGISTRATION]: registrationConversation,
  [ConversationId.CODE_WORD_INPUT]: codeWordInputConversation,
  [ConversationId.STUDENT_PUNISHMENT]: studentPunishmentConversation,
};
