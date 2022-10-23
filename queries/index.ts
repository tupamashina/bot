import { Query } from '../types/bot.ts';
import { QueryTrigger } from '../types/enums.ts';
import { punishTheStudentQuery } from './punishTheStudent.ts';
import { rewardTheStudentQuery } from './rewardTheStudent.ts';
import { whatToDoQuery } from './whatToDo.ts';

export const queries = new Map<string | RegExp, Query>([[
  QueryTrigger.WHAT_TO_DO,
  whatToDoQuery,
], [
  /^punish_the_student/,
  punishTheStudentQuery,
], [/^reward_the_student/, rewardTheStudentQuery]]);
