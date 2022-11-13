import { Conversation } from '../types-new/Conversation.ts';
import { createId } from './createId.ts';

export const createConversation = (
  builder: Conversation['builder'],
  dependencies: Conversation['dependencies'] = [],
): Conversation => ({ id: createId(), builder, dependencies });
