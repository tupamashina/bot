import { ConversationId, Conversations } from '../types/Conversations.ts';
import { mentorRegistrationConversation } from './mentorRegistration.ts';
import { projectCreationConversation } from './projectCreation.ts';
import { studentRegistrationConversation } from './studentRegistration.ts';

export const conversations: Conversations = new Map();

conversations.set(
  ConversationId.MENTOR_REGISTRATION,
  mentorRegistrationConversation,
);

conversations.set(
  ConversationId.STUDENT_REGISTRATION,
  studentRegistrationConversation,
);

conversations.set(ConversationId.PROJECT_CREATION, projectCreationConversation);
