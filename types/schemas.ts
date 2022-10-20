import { mongo } from '../deps.ts';

interface MongoSchema {
  _id: mongo.ObjectId;
}

export interface StudentSchema extends MongoSchema {
  telegramId: number;
  name: string;
  group: string;
  hearts: number;
  stars: number;
  usedWords: string[];
}
