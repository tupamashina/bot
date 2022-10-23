import { ConversationId } from '../types/enums.ts';
import { registrationConversation } from './registration.ts';

export const conversations = {
  [ConversationId.REGISTRATION]: registrationConversation,
};
