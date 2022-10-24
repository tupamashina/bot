import { Query } from '../types/bot.ts';
import { QueryTrigger } from '../types/enums.ts';
import { minusHeartQuery } from './minusHeart.ts';
import { minusStarQuery } from './minusStar.ts';
import { plusHeartQuery } from './plusHeart.ts';
import { plusStarQuery } from './plusStar.ts';
import { whatToDoQuery } from './whatToDo.ts';

export const queries = new Map<string | RegExp, Query>([
  [
    QueryTrigger.WHAT_TO_DO,
    whatToDoQuery,
  ],
  [/^plus_star/, plusStarQuery],
  [/^minus_star/, minusStarQuery],
  [/^plus_heart/, plusHeartQuery],
  [/^minus_heart/, minusHeartQuery],
]);
