import { QueryTrigger } from '../types/enums.ts';
import { whatToDoQuery } from './whatToDo.ts';

export const queries = {
  [QueryTrigger.WHAT_TO_DO]: whatToDoQuery,
};
