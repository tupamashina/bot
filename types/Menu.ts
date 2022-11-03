import { grammyMenu } from '../deps.ts';
import { Context } from './Context.ts';

export enum MenuId {
  REGISTRATION = 'REGISTRATION',
  PROJECT_CREATION = 'PROJECT_CREATION',
  ADMIN_CABINET = 'ADMIN_CABINET',
  MENTOR_CABINET = 'MENTOR_CABINET',
  STUDENT_CABINET = 'STUDENT_CABINET',
  SIGNING_UP_FOR_PROJECT = 'SIGNING_UP_FOR_PROJECT',
}

export class Menu extends grammyMenu.Menu<Context> {
  constructor(id: MenuId, options?: grammyMenu.MenuOptions<Context>) {
    super(id, options);
  }
}
