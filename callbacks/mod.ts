import { Callbacks, CallbackTrigger } from '../types/Callbacks.ts';
import { approveMentorCallback } from './approveMentor.ts';
import { approveStudentCallback } from './approveStudent.ts';
import { chooseProjectCallback } from './chooseProject.ts';
import { createProjectCallback } from './createProject.ts';
import { newMentorsCallback } from './newMentors.ts';
import { newStudentsCallback } from './newStudents.ts';
import { registerMentorCallback } from './registerMentor.ts';
import { registerStudentCallback } from './registerStudent.ts';
import { signUpForProjectCallback } from './signUpForProject.ts';

export const callbacks: Callbacks = new Map();

callbacks.set(CallbackTrigger.REGISTER_MENTOR, registerMentorCallback);
callbacks.set(CallbackTrigger.REGISTER_STUDENT, registerStudentCallback);

callbacks.set(CallbackTrigger.CREATE_PROJECT, createProjectCallback);
callbacks.set(CallbackTrigger.SIGN_UP_FOR_PROJECT, signUpForProjectCallback);

callbacks.set(
  new RegExp(`^${CallbackTrigger.CHOOSE_PROJECT}`),
  chooseProjectCallback,
);

callbacks.set(CallbackTrigger.NEW_MENTORS, newMentorsCallback);

callbacks.set(
  new RegExp(`^${CallbackTrigger.APPROVE_MENTOR}`),
  approveMentorCallback,
);

callbacks.set(CallbackTrigger.NEW_STUDENTS, newStudentsCallback);

callbacks.set(
  new RegExp(`^${CallbackTrigger.APPROVE_STUDENT}`),
  approveStudentCallback,
);
