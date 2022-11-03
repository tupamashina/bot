import { Callbacks, CallbackTrigger } from '../types/Callbacks.ts';
import { approveMentorCallback } from './approveMentor.ts';
import { approveStudentCallback } from './approveStudent.ts';
import { chooseProjectCallback } from './chooseProject.ts';
import { manageStudentCallback } from './mangeStudent.ts';

export const callbacks: Callbacks = new Map();

callbacks.set(
  new RegExp(`^${CallbackTrigger.MANAGE_STUDENT}`),
  manageStudentCallback,
);

callbacks.set(
  new RegExp(`^${CallbackTrigger.CHOOSE_PROJECT}`),
  chooseProjectCallback,
);

callbacks.set(
  new RegExp(`^${CallbackTrigger.APPROVE_MENTOR}`),
  approveMentorCallback,
);

callbacks.set(
  new RegExp(`^${CallbackTrigger.APPROVE_STUDENT}`),
  approveStudentCallback,
);
