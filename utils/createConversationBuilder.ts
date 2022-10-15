import { nanoid } from '../deps.ts';
import { ConversationBuilder } from '../types.ts';

export const createConversationBuilder = (
  builder: ConversationBuilder,
): [ConversationBuilder, string] => [
  Object.defineProperty(builder, 'name', { value: nanoid() }),
  builder.name,
];
