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
  telegramId: number;
  name: string;
  group: string;
  hearts: number;
  stars: number;
  usedWords: string[];
}
