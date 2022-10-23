import { mongo } from '../deps.ts';

interface MongoSchema {
  _id: mongo.ObjectId;
}

export enum Role {
  SLAVE = 'SLAVE',
  MASTER = 'MASTER',
}

export interface StudentSchema extends MongoSchema {
  role: Role;
  name: string;
  group: string;
  stars: number;
  hearts: number;
  chatId: number;
  telegramId: number;
  usedWords: string[];
}
